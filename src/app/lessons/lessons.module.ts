import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import routing
import { LessonsRoutes } from './lessons.routing';

import { LessonsComponent } from './lessons/lessons.component';
import { Day1Component } from './day-1/day-1.component';
import { Day2Component } from './day-2/day-2.component';

@NgModule({
  imports: [
    CommonModule,
    LessonsRoutes
  ],
  declarations: [
    LessonsComponent, 
    Day1Component, Day2Component
  ]
})
export class LessonsModule { }
