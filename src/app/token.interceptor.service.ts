import { Injectable, Injector } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(request, next) {
    let authService= this.injector.get(AuthService)
    let tokenizedReq= request.clone({
    setHeaders:{
      Authorization: `Bearer ${authService.getToken()}`
    }
})
return next.handle(tokenizedReq);
    }
}