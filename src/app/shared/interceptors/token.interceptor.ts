import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { NEVER, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // if (request.url.indexOf('login') > 0) {
    //   return next.handle(request);
    // }
    const skipRoute: string[] = ['login', 'register'];
    console.log(request.url);
    // console.log(skipRoute.find((s) => request.url.includes(s)));
    if (skipRoute.find((s) => request.url.includes(s))) {
      console.log('login and Register');
      return next.handle(request);
    }
    if (localStorage.getItem('token')) {
      const data = JSON.parse(localStorage.getItem('userDetails') || '{}');

      if (new Date().getTime() / 1000 < data.exp) {
        console.log('token is valid');
        request = request.clone({
          headers: request.headers.set(
            'authorization',
            localStorage.getItem('token') || '{}'
          ),
        });
        return next.handle(request);
      } else {
        localStorage.clear();
        this.router.navigate(['/user/login']);
        console.log('inside else part');
        return NEVER;
      }
    } else {
      this.router.navigate(['/user/login']);
    }
    return NEVER;
    // return next.handle(request);
  }
}
function token(token: any) {
  throw new Error('Function not implemented.');
}
