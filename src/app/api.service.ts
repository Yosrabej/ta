import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post';




@Injectable({

  providedIn: 'root',

})

export class ApiService {

  constructor(private http: HttpClient) {}


  login(username: string, password: string) {

    return this.http.post('http://127.0.0.1:8000/api/login_check', { username, password });

  }


  getArticles(): Observable<Post[]> {

    return this.http.get<Post[]>('http://127.0.0.1:8000/api/posts', {

      headers: {},

    });

  }

}