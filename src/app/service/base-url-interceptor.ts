import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const apiReq = request.clone({
      url: `${environment.apiUrl}/${request.url}`,
    });
    return next.handle(apiReq);
  }
}
