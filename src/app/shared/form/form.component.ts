import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Input() fields: any[] = [];
  @Output() submitted = new EventEmitter<any>();
  @Output() formStatus = new EventEmitter<any>();
  form: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    const group: any = {};
    this.fields.forEach((field) => {
      group[field.name] = [
        field.value || '',
        Validators.compose(field.validators || []),
      ];
      console.log('form field', field.name, 'validators', field.validators);
    });
    this.form = this.fb.group(group);
    this.emitFormStatus();
  }
  submitForm() {
    this.submitted.emit(this.form.value);
  }
  emitFormStatus() {
    this.formStatus.emit(this.form.status);
  }
}
