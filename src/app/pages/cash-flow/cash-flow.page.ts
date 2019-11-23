import { Component, OnInit } from '@angular/core';
import { ReportsService } from 'src/app/services/reports.service';

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
familyExpense:number
  constructor(private report:ReportsService) { }

  ngOnInit() {

  }

  segmentButtonClicked() {
    console.log('Python selected');
  }

}
