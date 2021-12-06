import { Component, OnInit } from '@angular/core';
import {Post} from '../post';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  readonly ROOT_URL="http://127.0.0.1:8000";
  posts:Observable<Post[]>;
  constructor(private http: HttpClient){}
  
  ngOnInit(): void {
  }
  getPosts(){
    this.posts =this.http.get<Post[]>(this.ROOT_URL + '/api/posts')
  }



}
