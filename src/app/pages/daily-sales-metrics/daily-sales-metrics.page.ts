import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ReportsService } from 'src/app/services/reports.service';

@Component({
  selector: 'app-daily-sales-metrics',
  templateUrl: './daily-sales-metrics.page.html',
  styleUrls: ['./daily-sales-metrics.page.scss'],
})
export class DailySalesMetricsPage implements OnInit {

  days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
 pattern='^\\d{9}$'
 
 
  salesForm:FormGroup
  total:any
  mondayRate:any
  mondaySales:any
  tuesdayRate:any
  tuesdaySales:any
  wednesdayRate:any
  wednesdaySales:any
  thursdayRate:any
  thursdaySales:any
  fridayRate:any
  fridaySales:any
  saturdayRate:any
  saturdaySales:any
  sundayRate:any
  sundaySales:any
  




  
  constructor(private fb:FormBuilder,private report:ReportsService) { }

  ngOnInit() {
    this.salesForm = this.fb.group({
     
      monday:new FormControl('Monday'),
      tuesday:new FormControl('Tuesday'),
      wednesday:new FormControl('Wednesday'),
      thursday:new FormControl('Thursday'),
      friday:new FormControl('Friday'),
      saturday:new FormControl('Saturday'),
      sunday:new FormControl('Sunday'),
      mondayRate:new FormControl(),
      mondaySales:new FormControl(),
      tuesdayRate:new FormControl(),
      tuesdaySales:new FormControl(),
      wednesdayRate:new FormControl(),
      wednesdaySales:new FormControl(),
      thursdayRate:new FormControl(),
      thursdaySales:new FormControl(),
      fridayRate:new FormControl(),
      fridaySales:new FormControl(),
      saturdayRate:new FormControl(),
      saturdaySales:new FormControl(),
      sundayRate:new FormControl(),
      sundaySales:new FormControl(),  
      day1:new FormControl(), 
      day2:new FormControl(), 
      day3:new FormControl(), 
    })

    this.salesForm.controls['day1'].setValue("Monday")
    this.salesForm.controls['day2'].setValue("Monday")
    this.salesForm.controls['day3'].setValue("Monday")

  }

  sales(){

    this.mondaySales = this.salesForm.controls['mondaySales'].value
    if(this.mondaySales===null)
    this.mondaySales =0

    this.tuesdaySales = this.salesForm.controls['tuesdaySales'].value
   if(this.tuesdaySales===null) 
       this.tuesdaySales = 0

   this.wednesdaySales = this.salesForm.controls['wednesdaySales'].value
   if(this.wednesdaySales===null) 
   this.wednesdaySales = 0

   this.thursdaySales = this.salesForm.controls['thursdaySales'].value
   if(this.thursdaySales===null) 
   this.thursdaySales = 0

   this.fridaySales = this.salesForm.controls['fridaySales'].value
   if(this.fridaySales===null) 
   this.fridaySales = 0

   this.saturdaySales = this.salesForm.controls['saturdaySales'].value
   if(this.saturdaySales===null) 
   this.saturdaySales = 0

   this.sundaySales = this.salesForm.controls['sundaySales'].value
   if(this.sundaySales===null) 
   this.sundaySales = 0

    this.total = this.mondaySales + this.tuesdaySales +this.wednesdaySales +this.thursdaySales
    + this.fridaySales + this.saturdaySales + this.sundaySales
  }

  submit(){
   // console.log(this.salesForm.value)
    this.report.dailySalesMetricsAmnt(this.salesForm.value,this.total);
  }

}
