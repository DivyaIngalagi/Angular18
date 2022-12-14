import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers/customers.component';
import { AppModule } from '../app.module';



@NgModule({
  declarations: [
    CustomersComponent
  ],
  exports:[CustomersComponent],
  imports: [
    CommonModule,
  ]
})
export class CustomerdashboardModule { }
