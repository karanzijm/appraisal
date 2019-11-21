import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  loanDetails:any
  familyEarnings:any;
  familyExpenses:any;
  stockValuation:any;
  salesMetrics:any;
  operatingExpense:any;
  businessFinancial:any;
  constructor() { }

  loanDetailsAmnt(loan){
     console.log("loanDetailsAmnt "+JSON.stringify(loan))
  }
  familyEarningsAmnt(value){
    console.log("familyEarningsAmnt "+JSON.stringify(value))
  }
  familyExpensesAmnt(value){
    console.log("familyExpensesAmnt "+JSON.stringify(value))
  }
  stockValuationAmnt(value){
    console.log("stockValuationAmnt"+JSON.stringify(value))

  }


}
