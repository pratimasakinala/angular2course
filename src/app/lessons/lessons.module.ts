import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import routing
import { LessonsRoutes } from './lessons.routing';

import { Week1Module } from './week-1/week-1.module';

import { LessonsComponent } from './lessons/lessons.component';

@NgModule({
  imports: [
    CommonModule,
    LessonsRoutes,
    Week1Module
  ],
  declarations: [
    LessonsComponent
  ]
})
export class LessonsModule { }
