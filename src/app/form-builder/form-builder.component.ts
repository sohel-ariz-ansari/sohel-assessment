import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilderService } from '../form-builder.service';
import { FORM_CONFIG } from '../form-config';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {
  formConfig = FORM_CONFIG;
  formGroup!: FormGroup;
  submittedValues: any = null;
  constructor(private formBuilderService: FormBuilderService) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilderService.createForm(this.formConfig.fields);
  }

  onSubmit(): void {
    if (this.formGroup.valid) {
      console.log('Form Submitted:', this.formGroup.value);
      // Simulate mock API submission
      alert('Form submitted successfully!');
      this.submittedValues = this.formGroup.value;
    } else {
      console.error('Form is invalid:', this.formGroup);
    }
  }

  onReset(): void {
    this.formGroup.reset();
  }
}
