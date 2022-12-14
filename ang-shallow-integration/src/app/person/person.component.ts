import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  
  personName: string;

  constructor() { }

  ngOnInit(): void {
  }

  setName() {
    this.personName = 'Mahesh';
  } 

  
}
