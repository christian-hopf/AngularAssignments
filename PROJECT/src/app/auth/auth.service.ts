import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import STORED_API_KEY from './API_KEY.js';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  signUp(email: string, password: string) {
    const API_KEY = STORED_API_KEY;
    // console.log(API_KEY);
    return this.http
      .post<AuthResponseData>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError((error) => {
          let errorMsg = 'Unknown error';
          if (!error.error || !error.error.error) {
            return throwError(errorMsg);
          }
          switch (error.error.error.message) {
            case 'EMAIL_EXISTS':
              errorMsg = 'Email already exists';
          }
          return throwError(errorMsg);
        })
      );
  }

  login(email: string, password: string) {
    const API_KEY = STORED_API_KEY;
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    );
  }
}
