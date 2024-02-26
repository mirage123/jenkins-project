import { Component,Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnChanges{

  @Input() rateNum = 1;
  rateTemp=1;
  ngOnChanges(){
    this.rateTemp = this.rateNum*15
  }

}
