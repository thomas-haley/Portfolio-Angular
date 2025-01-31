import { Component, inject, signal } from '@angular/core';
import { JsonFormComponent } from '../templates/json-form/json-form.component';
import { ComponentConfigLoaderService } from '../../_services/component-config-loader.service';
import { map } from 'rxjs';
import { JsonFormPayload } from '../../_models/json-form-payload';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import { FormHintRowComponent } from "../form-hint-row/form-hint-row.component";
import { ContactInquiryService } from '../../_services/contact-inquiry.service';
import { ContactInquiry } from '../../_models/contact-inquiry';
import { CustomToastrService } from '../../_services/custom-toastr.service';
@Component({
  selector: 'app-contact-me-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormHintRowComponent],
  templateUrl: './contact-me-form.component.html',
  styleUrl: './contact-me-form.component.css'
})
export class ContactMeFormComponent extends JsonFormComponent{

  contactService = inject(ContactInquiryService);
  toaster = inject(CustomToastrService);
  nameControl = new FormControl('', [Validators.required, this.validateText()]);
  
  emailControl = new FormControl('', [Validators.required, this.validateText()]);
  typeControl = new FormControl('general', [Validators.required, this.validateText()]);
  commentControl = new FormControl('');

  supressHints = true;
  private http = inject(ComponentConfigLoaderService)
  x = signal<JsonFormPayload|null>(null);


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
    this.supressHints = false;
    if(!this.validateInput()){
      this.toaster.showError("Error validating input, please see form for more details.");
      return;
    }

    let inqData : ContactInquiry = {
      Name: this.nameControl.value!,
      Email: this.emailControl.value!,
      Type: this.typeControl.value!,
      Comment: this.commentControl.value!
    };

    this.contactService.createInquiry(inqData).subscribe(res => {

      //TODO: Show toaster, clear form
      // console.log("TODO: Show toaster here")
      // console.log(res.message);
    });

    this.toaster.showSuccess("Inquiry sent. Thank you for your feedback!");
    this.resetForm();
    // let object = {
    //   "contentTag": this.formTag,
    //   "formType": "contact-form",
    //   "fields": [
    //     {
    //       "field": "name",
    //       "type": "string",
    //       "value": this.nameControl.value
    //     },
    //     {
    //       "field": "email",
    //       "type": "string",
    //       "value": this.emailControl.value
    //     },
    //     {
    //       "field": "inquiry_type",
    //       "type": "string",
    //       "value": this.typeControl.value
    //     },
    //     {
    //       "field": "inquiry_comments",
    //       "type": "string",
    //       "value": this.commentControl.value
    //     }
    //   ]
    // };

    // this.castObjectToFormPayload(object["fields"]);


    // this.supressHints = true;
    // console.log(this.payload);
  }



  resetForm(){
    this.supressHints = true;
    this.nameControl.reset();
    this.emailControl.reset();
    this.typeControl.reset("general");
    this.commentControl.reset();
  }
}
