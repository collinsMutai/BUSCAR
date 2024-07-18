import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BackendInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let data:any = request.body
    if(request.url.endsWith('ChangePassword')){
      data.token=environment.token
      request = request.clone({ headers: request.headers.set('Authorization',JSON.parse(sessionStorage.getItem('loggedUser')).api_token),body:data});
    }else if(request.url.endsWith('json')){
  
    }
    else{
      data.token=environment.token
      request = request.clone({ headers: request.headers.set('Authorization', '4F5D3QC5-C94A-CFD5-87C1-4E2903311DF0'),body:data});
    }
    return next.handle(request);
  }
}
