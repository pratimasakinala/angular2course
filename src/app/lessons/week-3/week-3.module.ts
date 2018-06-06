import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Week3Component } from './week-3/week-3.component';
import { Day1Component } from './day-1/day-1.component';
import { Day2Component } from './day-2/day-2.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Week3Component,
    Day1Component,
    Day2Component
  ],
  exports: [
    Week3Component
  ]
})
export class Week3Module { }
