import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  constructor() { }

  property: any = {
    Id : 1,
    Name : "Zaid Qassim",
    Type : "House",
    Price : "1200"
  }
  

  ngOnInit() {
  }

}
