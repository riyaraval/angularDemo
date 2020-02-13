import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()

export class AuthHeaderIntercepter implements HttpInterceptor{
    
    intercept(request:HttpRequest<any>,next:HttpHandler){
        console.log( request.url);
        const authToken=window.localStorage.getItem('token');
        const authReq=request.clone({
            setHeaders:{
                Authorization:authToken
            }
        });
        console.log(authToken)
        console.log(authReq)
        return next.handle(authReq);
    }
}