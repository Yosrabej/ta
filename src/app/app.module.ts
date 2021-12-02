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
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListeCursusComponent,
    DetailCursusComponent,
    OrderPipe,
    ApprentisComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'apprentis', component: ApprentisComponent },
      { path: 'cursus', component: ListeCursusComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
