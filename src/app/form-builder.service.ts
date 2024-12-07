import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {
  constructor(private fb: FormBuilder) {}

  createForm(fields: any[]): FormGroup {
    const group: any = {};

    fields.forEach(field => {
      const control = this.fb.control(
        field.value || '',
        this.getValidators(field.validations)
      );
      group[field.name] = control;
    });

    return this.fb.group(group);
  }

  private getValidators(validations: any): any[] {
    const validatorFns = [];
    if (validations) {
      if (validations.required) validatorFns.push(Validators.required);
      if (validations.minLength)
        validatorFns.push(Validators.minLength(validations.minLength));
      if (validations.maxLength)
        validatorFns.push(Validators.maxLength(validations.maxLength));
      if (validations.pattern)
        validatorFns.push(Validators.pattern(validations.pattern));
    }
    return validatorFns;
  }
}
