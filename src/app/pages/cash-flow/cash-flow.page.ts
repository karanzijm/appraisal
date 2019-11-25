import { Component, OnInit } from '@angular/core';
import { ReportsService } from 'src/app/services/reports.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-cash-flow',
  templateUrl: './cash-flow.page.html',
  styleUrls: ['./cash-flow.page.scss'],
})
export class CashFlowPage implements OnInit {
testing:string;
sales:number;
otherBusinessIncome:number;
familyEarning:number;
costOfSales:number;
businessOperationExpenses:number;
surplus:number;
familyExpense:number;
inflow:number;
outflow:number;

  constructor(private report:ReportsService) { }

  ngOnInit() {
    $('#cashflow').hide();
    $('#balanceSheet').show();

    if(this.report.costOfSales === undefined)
          this.report.costOfSales = 0

    if(this.report.familyEarnings === undefined)     
        this.report.familyEarnings = 0

    if(this.report.monthlySales === undefined)
      this.report.monthlySales = 0

     if(this.report.familyExpenses === undefined) 
        this.report.familyExpenses = 0

     if(this.report.operatingExpense === undefined)
         this.report.operatingExpense = 0

     if(this.otherBusinessIncome === undefined)
     this.otherBusinessIncome = 0

     if(this.report.spouseInflow === undefined)
     this.report.spouseInflow = 0

      Math.ceil(this.report.costOfSales)
   this.costOfSales = this.report.costOfSales;
   console.log(this.costOfSales)

  //  Math.ceil(this.report.spouseInflow)
   this.familyEarning = this.report.spouseInflow;

  //  Math.ceil(this.report.monthlySales)
   this.sales= this.report.monthlySales;
   console.log(this.sales)
   

  //  Math.ceil(this.report.familyExpenses)
   this.familyExpense = this.report.familyExpenses;
   
  //  Math.ceil(this.report.operatingExpense)
   this.businessOperationExpenses = this.report.operatingExpense
   
   
   this.inflow = this.sales + this.otherBusinessIncome + this.familyEarning;
   

   this.outflow = this.costOfSales + this.businessOperationExpenses + this.familyExpense


   this.surplus = this.inflow - this.outflow
  

  }

  segmentButtonClicked() {
    console.log('Python selected');

    $('#cashflow').hide();
  }

}
