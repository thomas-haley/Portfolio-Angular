import { Component } from '@angular/core';
import { BaseFormComponent } from '../base-form/base-form.component';
import { BaseFormPayload, JsonFormPayload } from '../../../_models/json-form-payload';

@Component({
  selector: 'app-json-form',
  standalone: true,
  imports: [],
  templateUrl: './json-form.component.html',
  styleUrl: './json-form.component.css'
})
export class JsonFormComponent extends BaseFormComponent{

  //Typecasts to custom interface for transmission to backend
  public castObjectToFormPayload(input: any): BaseFormPayload
  {
    // console.log(input);
    this.payload = {
      contentTag: this.formTag,
      formType: "json-form",
      fields: input
    }
    
    console.log(this.payload);
    return this.payload!;
  }
}
