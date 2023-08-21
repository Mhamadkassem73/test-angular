import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent  implements OnInit {
  @Input('label') label!: string;
  @Input('control') control!: string;
  @Input('type') type!: string;
  @Input('hint') hint: string='';
  @Input('form') form!: FormGroup;
  @Input('numberOnly') numberOnly:  boolean = false;
  @Output() onChangeField = new EventEmitter<any>();
  constructor() {
  }

  ngOnInit(): void {
  }
  onChangeValue(value:any)
  {
    this.onChangeField.emit(value);
  }





}
