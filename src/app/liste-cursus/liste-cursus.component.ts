import { Component, OnInit } from '@angular/core';
import { LCursus } from '../mock-cursus';
import {Cursus} from '../cursus';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { CustomValidator } from '../validation';
@Component({
  selector: 'app-liste-cursus',
  templateUrl: './liste-cursus.component.html',
  styleUrls: ['./liste-cursus.component.css']
})
export class ListeCursusComponent implements OnInit {
lcursus=LCursus;
selectedCursus?: Cursus;
checkoutForm : any ;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }
  onSelect(cursus: Cursus): void {
    this.selectedCursus = cursus;
  }
  onSubmit(): void {
    if(this.checkoutForm.invalid){
      console.warn('required');
      return;
    }
    //console.warn('le cursus a été ajouté', this.checkoutForm.value);
    this.lcursus.push(this.checkoutForm.value);
    this.checkoutForm.reset();
  }
  initForm(){
    const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
    const mt = '^[a-zA-Z]{2,40}(?: +[a-zA-Z]{2,40})+$'

    this.checkoutForm = this.formBuilder.group({

      nom: ['', [Validators.required, CustomValidator.numberValidator]],
      description: ['', [Validators.required]],

      image: ['', [Validators.required, Validators.pattern(reg)]],

      motsCles:['', [Validators.required, Validators.pattern(mt)]],

    });

  }
}
