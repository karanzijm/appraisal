import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  loanDetails:any
  loanAmount:number;
  loanTerm:number;
  loanInterest:number;
  installment:number;
  familyEarnings:any;
  familyExpenses:any;
  stockValuation:any;
  salesMetrics:any;
  operatingExpense:any;
  businessFinancial:any;

  constructor() { }

  loanDetailsAmnt(value){
     console.log(value)
     this.loanAmount = value.loanAmount
     this.loanTerm = value.period
     this.loanInterest = ((value.interest/100)/12)
     console.log(this.loanInterest)
    this.installment = this.loanAmount*(((this.loanInterest*(Math.pow((1+this.loanInterest),this.loanTerm))))/((Math.pow((1+this.loanInterest),this.loanTerm))-1))
    console.log(this.installment)
  }
  familyEarningsAmnt(value){
    console.log("familyEarningsAmnt "+JSON.stringify(value))
  
    //let interest = (())
  // this.installment = 
  }
  familyExpensesAmnt(value){
    this.familyExpenses = value;
    console.log(this.familyExpenses)
  }
  stockValuationAmnt(value){
    console.log("stockValuationAmnt"+JSON.stringify(value))

  }
  dailySalesMetricsAmnt(form,total){
    console.log("dailySalesMetricsAmnt"+JSON.stringify(form))
  }
  operatingExpensesAmnt(value){
    console.log("operatingExpensesAmnt "+JSON.stringify(value))
    this.operatingExpense = value
    console.log(this.operatingExpense)
  }
  businessFinancialAmnt(value){
    console.log("businessFinancialAmnt "+JSON.stringify(value))

  }


}
