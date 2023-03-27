import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Day1Component } from './day1/day1.component';
import { Day2Component } from './day2/day2.component';
import { Day3Component } from './day3/day3.component';
import { Day4Component } from './day4/day4.component';
import { Day5Component } from './day5/day5.component';
import { Day6Component } from './day6/day6.component';
import { Day7Component } from './day7/day7.component';
import { Day8Component } from './day8/day8.component';
import { Day10Component } from './day10/day10.component';
import { Day13Component } from './day13/day13.component';
import { Day24Component } from './day24/day24.component';

@NgModule({
  declarations: [
    AppComponent,
    Day1Component,
    Day2Component,
    Day3Component,
    Day4Component,
    Day5Component,
    Day6Component,
    Day7Component,
    Day8Component,
    Day10Component,
    Day13Component,
    Day24Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
