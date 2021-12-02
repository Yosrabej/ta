import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { LApprentis } from '../mock-apprentis';
import { LCursus } from '../mock-cursus';

@Component({
  selector: 'app-apprentis',
  templateUrl: './apprentis.component.html',
  styleUrls: ['./apprentis.component.css']
})
export class ApprentisComponent implements OnInit {
  lcursus=LCursus;
  checkoutForm : any ;
 apprentis = LApprentis;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {this.initForm();
  }
  onSubmit(): void {
    if(this.checkoutForm.invalid){
      console.warn('field required');
      return;
    }
   console.warn(this.checkoutForm.value);
   this.apprentis.push(this.checkoutForm.value);
    this.checkoutForm.reset();
  }
  initForm(){
    const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
    const mt = '^[a-zA-Z]{2,40}(?: +[a-zA-Z]{2,40})+$'

    this.checkoutForm = this.formBuilder.group({

      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],

    cursus: ['', [Validators.required]],


    });

  }
}
