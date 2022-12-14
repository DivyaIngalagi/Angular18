import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My-First-AngularApp';
  firstName:string="Divya";
  lastName:string="Ingalagi";
  n1:number=10;
  n2:number=20;
  isdisabled:boolean=true;
  greetUser(){
    console.log("Hi Hloo");
  }
}
