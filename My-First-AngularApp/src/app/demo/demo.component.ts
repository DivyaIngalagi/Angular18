import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',//.appdemo,#appdemo
  templateUrl: './demo.component.html',//if we have soo much html content so we do loke this
  // template:`<h2>Demo Component</h2><p>Simple Demo Paragraph</p><app-test></app-test>`//we can also include the other components here we can nested here all if we want//if we have less html content so we do loke this
  styleUrls: ['./demo.component.css']//we can also remove style if don't want to add
  // styles:['h2{background-color:purple;color:white}']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
