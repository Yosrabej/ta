import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { ApiService } from './api.service';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  private readonly TOKEN_NAME = 'token';
  constructor(private http: HttpClient, private apiService: ApiService) { 

  }
getToken(){
  return localStorage.getItem('token');
}
login(username: string, password: string) {

  return this.apiService.login(username, password).pipe(

    tap((response: any) => {

      this._isLoggedIn$.next(true);

      localStorage.setItem(this.TOKEN_NAME, response.token);

    })

  );

}
}
