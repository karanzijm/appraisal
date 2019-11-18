import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-sales-metrics',
  templateUrl: './daily-sales-metrics.page.html',
  styleUrls: ['./daily-sales-metrics.page.scss'],
})
export class DailySalesMetricsPage implements OnInit {

  days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
  // var day1,day2,day3
  day1="Monday"
  day2="Monday"
  day3="Monday"
  constructor() { }

  ngOnInit() {
  }

}
