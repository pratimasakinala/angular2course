import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Day1Component } from './day-1/day-1.component';
import { Week2Component } from './week-2/week-2.component';
import { Day2Component } from './day-2/day-2.component';
import { Day3Component } from './day-3/day-3.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Day1Component,
    Week2Component,
    Day2Component,
    Day3Component
  ],
  exports: [
    Week2Component
  ]
})
export class Week2Module { }
