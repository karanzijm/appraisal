import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-sales-metrics',
  templateUrl: './daily-sales-metrics.page.html',
  styleUrls: ['./daily-sales-metrics.page.scss'],
})
export class DailySalesMetricsPage implements OnInit {

  days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
 
  day1="Monday"
  day2="Monday"
  day3="Monday"
  total:number;
  mondayRate:number
  mondaySales:number
  tuesdayRate:number
  tuesdaySales:number
  wednesdayRate:number
  wednesdaySales:number
  thursdayRate:number
  thursdaySales:number
  fridayRate:number
  fridaySales:number
  saturdayRate:number
  saturdaySales:number
  sundayRate:number
  sundaySales:number




  
  constructor() { }

  ngOnInit() {
  }

}
