import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListeCursusComponent } from './liste-cursus/liste-cursus.component';
import { DetailCursusComponent } from './detail-cursus/detail-cursus.component';
import { OrderPipe } from './order.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ApprentisComponent } from './apprentis/apprentis.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ArticlesComponent } from './articles/articles.component';
import { LoginComponent } from './login/login.component';
import { TokenInterceptorService } from './token.interceptor.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListeCursusComponent,
    DetailCursusComponent,
    OrderPipe,
    ApprentisComponent,
    ArticlesComponent,
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'api/posts', component: ArticlesComponent },
      { path: 'apprentis', component: ApprentisComponent },
      { path: 'cursus', component: ListeCursusComponent }
    ])
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
