import { Component, Input } from '@angular/core';
import { BaseFormPayload, RootObject } from '../../../_models/json-form-payload';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-base-form',
  standalone: true,
  imports: [],
  templateUrl: './base-form.component.html',
  styleUrl: './base-form.component.css'
})
export abstract class BaseFormComponent extends Component{
  @Input() formTag!: string;
  protected payload?: BaseFormPayload;

  abstract castObjectToFormPayload(input: any): BaseFormPayload;

  validateText(): ValidatorFn
  {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      //Test that text has content
      if(value == null || value == ''){
        return {'missingContent': true};
      }

      return null;
    };
  }
}
