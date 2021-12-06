import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  constructor(private fb:FormBuilder, private router:Router,
    private authService: AuthService,
    private http: HttpClient,
   ) {    this.form = this.fb.group({
    username: ['',Validators.required],
    password: ['',Validators.required]
}); }

  ngOnInit(): void {
  }
  submitForm() {

    if (this.form.invalid) {

      return;

    }

    this.authService.login(this.form.get('username')?.value, this.form.get('password')?.value).subscribe((response) => {

        this.router.navigate(['/cursus']);

      });

  }
}
