import { jwtDecode } from 'jwt-decode';
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
  constructor( private router:Router){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercepting request:', req.url);

    const token = localStorage.getItem('token');
    if (token) {
      console.log('Token found:', token);

      try {
        const decodedToken: any = jwtDecode(token);
        console.log('Decoded Token:', decodedToken);

        const currentTime = Math.floor(Date.now() / 1000);
        console.log('Current Time:', currentTime, 'Token Expiry:', decodedToken.exp);

        const excludedUrls = ['/login/', '/register/'];
        const isExcluded = excludedUrls.some((url) => req.url.includes(url));
        if (isExcluded) {
          console.log('URL excluded from token check:', req.url);
          return next.handle(req);
        }

        if (decodedToken.exp < currentTime) {
          console.log('Token has expired.');
          this.handleTokenExpiration();
          return throwError(() => new Error('Token has expired'));
        }

        req = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log('Authorization header added.');
      } catch (error) {
        console.error('Error decoding token:', error);
        this.handleTokenExpiration();
        return throwError(() => new Error('Invalid token'));
      }
    } else {
      console.log('No token found in localStorage.');
    }

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('HTTP Error:', error);
        if (error.status === 401) {
          console.log('Unauthorized error. Redirecting to login.');
          this.handleTokenExpiration();
        }
        return throwError(() => error);
      })
    );
  }
  private handleTokenExpiration() {
    console.log('Token expired. Redirecting to login...');
    localStorage.removeItem('token');
    this.router.navigate(['/login']).then(() => {
      console.log('Redirected to login.');
    });
  }
}

