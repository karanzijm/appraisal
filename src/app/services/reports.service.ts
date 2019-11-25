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
  dailySalesAv:number;
  monthlySales:number;
  costOfSales:number;
  totalPurchases:number;
  totalMonthlySales:number;
  spouseInflow:number;
  totalCash:number;
  spouseCash:number;
  bankCash:number;

  constructor() { }

  loanDetailsAmnt(value){
     ///console.log(value)
     this.loanAmount = value.loanAmount
     this.loanTerm = value.period
     this.loanInterest = ((value.interest/100)/12)
     console.log(this.loanInterest)
    this.installment = this.loanAmount*(((this.loanInterest*(Math.pow((1+this.loanInterest),this.loanTerm))))/((Math.pow((1+this.loanInterest),this.loanTerm))-1))
    console.log(this.installment)
  }
  familyEarningsAmnt(value){
    console.log("familyEarningsAmnt "+JSON.stringify(value))
    this.familyEarnings = value;
    this.spouseInflow = value.monthlySales;
    this.spouseCash = value.cash

    //let interest = (())
  // this.installment =
  }
  familyExpensesAmnt(value){
    this.familyExpenses = value;

    console.log(this.familyExpenses)
  }
  stockValuationAmnt(value){
    console.log(this.totalMonthlySales)
    console.log(this.totalPurchases)
   // if(this.totalMonthlySales ===undefined)
        this.totalMonthlySales = 0

    //if(this.totalPurchases===undefined)
        this.totalPurchases = 0

    console.log("stockValuationAmnt"+JSON.stringify(value))
    value.forEach(element => {
      this.totalMonthlySales +=(element.price * element.quantity);
      this.totalPurchases +=  (element.cost * element.quantity);
    });
    console.log("After calc "+this.totalMonthlySales)
    console.log("After calc "+this.totalPurchases)

    this. totalCostOfSales()

  }
  dailySalesMetricsAmnt(form,total){
    console.log("dailySalesMetricsAmnt"+JSON.stringify(form))
    this.dailySalesAv = total/7

    //daily av * each day in a week * each week in a month
    this.monthlySales = this.dailySalesAv * 4 * 7
    console.log(this.monthlySales)
    this. totalCostOfSales()
  }
  operatingExpensesAmnt(value){
    console.log("operatingExpensesAmnt "+JSON.stringify(value))
    this.operatingExpense = value
    console.log(this.operatingExpense)
  }
  businessFinancialAmnt(value,form){
    console.log("businessFinancialAmnt "+JSON.stringify(value))
    console.log(form.cash)
    if(form.cash===null)
        form.cash = 0

    if(form.bank === null)
      form.bank = 0

    //if()
    this.totalCash = form.cash
    this.bankCash = form.bank
  }
  totalCostOfSales(){

   console.log(this.monthlySales)
   console.log(this.totalMonthlySales)
   console.log(this.costOfSales)


    if(this.monthlySales === undefined)
    this.monthlySales = 0;

    // if(this.totalMonthlySales === undefined)
    //    this.totalMonthlySales = 0;

    if(this.totalMonthlySales === undefined){
      this.costOfSales = 0
    }else{

  console.log("hsabsa")
    this.costOfSales = Math.min(this.monthlySales,this.totalMonthlySales)

    this.costOfSales =  (this.totalPurchases * this.costOfSales)/this.totalMonthlySales
  }
    console.log(this.costOfSales)
  }


}
