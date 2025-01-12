import { Component, inject, signal } from '@angular/core';
import { JsonFormComponent } from '../templates/json-form/json-form.component';
import { ComponentConfigLoaderService } from '../../_services/component-config-loader.service';
import { map } from 'rxjs';
import { JsonFormPayload } from '../../_models/json-form-payload';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import { FormHintRowComponent } from "../form-hint-row/form-hint-row.component";
@Component({
  selector: 'app-contact-me-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormHintRowComponent],
  templateUrl: './contact-me-form.component.html',
  styleUrl: './contact-me-form.component.css'
})
export class ContactMeFormComponent extends JsonFormComponent{

  nameControl = new FormControl('', [Validators.required, this.validateText()]);
  
  emailControl = new FormControl('', [Validators.required, this.validateText()]);
  typeControl = new FormControl('general', [Validators.required, this.validateText()]);
  commentControl = new FormControl('');

  supressHints = true;
  private http = inject(ComponentConfigLoaderService)
  x = signal<JsonFormPayload|null>(null);
  ngOnInit(){
    console.log("Contact me initialized");
    // this.test();
    // this.nameControl.
  }

  validateInput(): boolean{
    let result = true;
    //Run validator if present
    this.nameControl.validator
    result = this.nameControl.valid && (result == true)
    result = this.emailControl.valid && (result == true)
    result = this.typeControl.valid && (result == true)
    result = this.commentControl.valid && (result == true)
    return result;
  }






  submitContactMe(){
    console.log("Validating");
    this.supressHints = false;
    if(!this.validateInput()){
      return;
    }

    let object = {
      "contentTag": this.formTag,
      "formType": "contact-form",
      "fields": [
        {
          "field": "name",
          "type": "string",
          "value": this.nameControl.value
        },
        {
          "field": "email",
          "type": "string",
          "value": this.emailControl.value
        },
        {
          "field": "inquiry_type",
          "type": "string",
          "value": this.typeControl.value
        },
        {
          "field": "inquiry_comments",
          "type": "string",
          "value": this.commentControl.value
        }
      ]
    };

    this.castObjectToFormPayload(object["fields"]);


    this.supressHints = true;
    console.log(this.payload);
  }
}
