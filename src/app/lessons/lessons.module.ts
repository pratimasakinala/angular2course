import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import routing
import { LessonsRoutes } from './lessons.routing';

import { Week1Module } from './week-1/week-1.module';
import { Week2Module } from './week-2/week-2.module';
import { Week3Module } from './week-3/week-3.module';
import { Week4Module } from './week-4/week-4.module';

import { LessonsComponent } from './lessons/lessons.component';

@NgModule({
  imports: [
    CommonModule,
    LessonsRoutes,
    Week1Module,
    Week2Module,
    Week3Module,
    Week4Module
  ],
  declarations: [
    LessonsComponent
  ]
})
export class LessonsModule { }
