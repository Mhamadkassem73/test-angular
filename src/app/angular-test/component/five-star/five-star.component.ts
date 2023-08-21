import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-five-star',
  templateUrl: './five-star.component.html',
  styleUrls: ['./five-star.component.css']
})
export class FiveStarComponent implements OnInit {
  @Input() rating!: any; // Input property to receive popularity rating
  stars: boolean[] = new Array(5); // Array to track star status

  constructor() {


   }

  ngOnInit(): void {
    this.stars.fill(true, 0, Math.floor(parseInt(this.rating)/20)); 
    this.stars.fill(false, Math.floor(parseInt(this.rating)/20), 5); 
  }
  }
