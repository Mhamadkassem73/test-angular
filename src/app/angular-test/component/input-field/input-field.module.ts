import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { InputFieldComponent } from './input-field.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
    imports  : [
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatRadioModule,
        MatButtonToggleModule,
        ReactiveFormsModule,
    ],
    providers: [
    ],
    declarations: [
        InputFieldComponent
    ],
    exports : [
        InputFieldComponent
    ]
})
export class InputFieldModule
{
}
