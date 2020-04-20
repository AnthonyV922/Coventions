import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pandemic-map',
  templateUrl: './pandemic-map.component.html',
  styleUrls: ['./pandemic-map.component.css']
})
export class PandemicMapComponent implements OnInit {
count = 0;
  constructor() { }

  ngOnInit() {
    this.count += 5;
    console.log(this.count);
  }
mapClicked(state) {
  console.log(state);
}
}
