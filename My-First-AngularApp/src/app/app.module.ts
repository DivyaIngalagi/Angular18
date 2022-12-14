import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //we habe to include it
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { CustomerdashboardModule } from './customerdashboard/customerdashboard.module';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [AppComponent, DemoComponent, PatientDetailsComponent],
  exports: [DemoComponent],
  imports: [
    BrowserModule,
    // FormsModule, //we have to include it
    CustomerdashboardModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatFormFieldModule,
    // ReactiveFormsModule,
    // FormsModule,
    MatButtonModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
