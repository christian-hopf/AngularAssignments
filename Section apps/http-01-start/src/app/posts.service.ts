import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpEventType,
} from '@angular/common/http';
import { Post } from './post.model';
import { map, catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostsService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createPost(postData: Post) {
    // const postData: Post = { title, content };
    this.http
      .post(
        'https://recipeapp-93a13-default-rtdb.firebaseio.com/posts.json',
        postData,
        {
          observe: 'body',
        }
      )
      .subscribe(
        (responseData) => {
          console.log(responseData);
        },
        (error) => {
          this.error.next(error.message);
        }
      );
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams.append('print', 'pretty');
    return this.http
      .get<{ [key: string]: Post }>(
        'https://recipeapp-93a13-default-rtdb.firebaseio.com/posts.json',
        {
          headers: new HttpHeaders({ 'Custom-Header': 'Bruh' }),
          //   params: new HttpParams().set('print', 'pretty'),
          params: searchParams,
          responseType: 'json',
        }
      )
      .pipe(
        map((responseData) => {
          const posts: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              posts.push({ id: key, ...responseData[key] });
            }
          }
          return posts;
        }),
        catchError((errorRes) => {
          console.log('error handling');
          return throwError(errorRes);
        })
      );
  }

  deletePosts() {
    return this.http
      .delete(
        'https://recipeapp-93a13-default-rtdb.firebaseio.com/posts.json',
        {
          observe: 'events',
          responseType: 'text',
        }
      )
      .pipe(
        tap((event) => {
          console.log(event);
          if (event.type === HttpEventType.Sent) {
            console.log('sent');
          }
          if (event.type === HttpEventType.Response) {
            console.log(event.body);
          }
        })
      );
  }
}
