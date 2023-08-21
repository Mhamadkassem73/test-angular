import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent  implements OnInit {
  @Input('label') label!: string;
  @Input('control') control!: string;
  @Input('form') form!: FormGroup;
  @Input('options') options! :any;
  @Input('optionName') optionName!: string; 
  @Input('optionValue') optionValue!: string;
  @Output() onDropdownSelection = new EventEmitter<any>();
  constructor() {
   }

  ngOnInit(): void {

  }

  onSelectionChange(event:any)
  {
    this.onDropdownSelection.emit(event);
  }


}
