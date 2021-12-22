import { Component, Input, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'custom-slider',
  templateUrl: './custom-slider.component.html',
  styleUrls: ['./custom-slider.component.scss'],
})
export class CustomSliderComponent implements OnInit {
  @Input() maxValue: number;
  value: number = 10;
  highValue: number = 90;
  options: Options = {
    floor: 0,
    ceil: 100,
    showOuterSelectionBars: true,
    showTicks: true,
    translate: (value, label) => {
      return value + '%';
    },
    ticksArray: [10, 40, 50, 90],
  };

  ngOnInit() {
    console.log(this.maxValue);
  }
}
