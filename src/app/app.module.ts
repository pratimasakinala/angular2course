import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRouting } from './app.routing';

import { LessonsModule } from './lessons/lessons.module';

import { AppComponent } from './app.component';
import { HeaderLmntComponent } from './header-lmnt/header-lmnt.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderLmntComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouting,
    LessonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
