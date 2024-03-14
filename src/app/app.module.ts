import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassGeneratorComponent } from './pass-generator/pass-generator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TdfValidationComponent } from './tdf-validation/tdf-validation.component';
// import { NesteddropdownComponent } from './nesteddropdown/nesteddropdown.component';
import { AgeCalculatorComponent } from './age-calculator/age-calculator.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    PassGeneratorComponent,
    TdfValidationComponent,
    // NesteddropdownComponent,
    AgeCalculatorComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
