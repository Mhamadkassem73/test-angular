import { NgModule } from '@angular/core';
import { FiveStarComponent } from './five-star.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
    imports  : [
        CommonModule,
        MatIconModule
    ],
    providers: [
    ],
    declarations: [
        FiveStarComponent
    ],
    exports : [
        FiveStarComponent
    ]
})
export class FiveStarModule
{
}
