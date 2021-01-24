import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { EmailvalidatorDirective } from './emailvalidator.directive';
import { YearvalidatorDirective } from './yearvalidator.directive';
import { MonthvalidatorDirective } from './monthvalidator.directive';
import { DayvalidatorDirective } from './dayvalidator.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    EmailvalidatorDirective,
    YearvalidatorDirective,
    MonthvalidatorDirective,
    DayvalidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
