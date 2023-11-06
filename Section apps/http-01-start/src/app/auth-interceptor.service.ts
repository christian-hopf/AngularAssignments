import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEventType,
} from '@angular/common/http';
import { tap } from 'rxjs/operators';

export class AuthInterceptorService implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // console.log('request on its way');
    const modifiedRequest = request.clone({
      headers: request.headers.append('Auth', 'key'),
    });
    return next.handle(modifiedRequest);
    // .pipe(
    //   tap((event) => {
    //     console.log(event);
    //     if (event.type === HttpEventType.Response) {
    //       console.log('response body data:');
    //       console.log(event.body);
    //     }
    //   })
    // );
  }
}
