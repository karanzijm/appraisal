import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  loanDetails:any
  loanAmount:number=0;
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
  totalPurchases:number = 0;
  totalMonthlySales:number = 0;
  spouseInflow:number = 0;
  totalCash:number = 0;
  spouseCash:number = 0;
  bankCash:number = 0;
  receivables:number = 0;
  furniture:number= 0;
  vehicles:number = 0;
  premises:number = 0;
  equipment:number = 0;
  loans:number = 0;
  shortTermDebt:number = 0;
  longTermDebt:number = 0;
  sales:number=0
  collateral:number=0
  proposedInstallment:number=0
  spouseMonthlySales: number=0;
  spouseFixedAssets: number=0;
  spouseMonthlyPurchases: number=0;
  stockValue: number=0;
  operationalExpenses: number=0;
  spouseOperationalExpenses: number = 0;
  spouseOutflow: number = 0;
  spouseSurplus: number;
  otherBusinessIncome: number = 0;
  
  

  constructor() { }

  loanDetailsAmnt(value){
     ///console.log(value)
     this.loanAmount = value.loanAmount
     this.loanTerm = value.period
     this.loanInterest = ((value.interest/100)/12)
     console.log(this.loanInterest)
    this.installment = this.loanAmount*(((this.loanInterest*(Math.pow((1+this.loanInterest),this.loanTerm))))/((Math.pow((1+this.loanInterest),this.loanTerm))-1))
    console.log(this.installment)
    this.collateral = value.collateral;
    this.proposedInstallment = value.installment
  }
  familyEarningsAmnt(value){
    console.log("familyEarningsAmnt "+JSON.stringify(value))
    this.familyEarnings = value;
    
    this.spouseCash = value.cash;
    this.spouseMonthlySales = value.monthlySales;
    this.spouseFixedAssets = value.fixedAssets;
    this.spouseMonthlyPurchases = value.monthlyPurchases;
    this.stockValue  = value.stockValue;
    this.spouseOperationalExpenses = value.operationalExpenses

    this.spouseInflow = this.spouseCash + this.spouseMonthlySales;
    this.spouseOutflow = this.spouseMonthlyPurchases + this.spouseOperationalExpenses;
    this.spouseSurplus = this.spouseInflow - this.spouseOutflow;

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

    if(form.debtsBelow3 === null )
    form.debtsBelow3 = 0

    if(form.debtsOver3 === null )
        form.debtsOver3 = 0

    if(form.furniture === null)
        form.furniture = 0
      
    if(form.vehicles === null)
      form.vehicles = 0

    if(form.premises === null)
        form.premises = 0

    if(form.equipment === null)
       form.equipment = 0
    
    if(form.debtors === null)
      form.debtors = 0
      
    if(form.netEarning === null)
        form.netEarning = 0
      
       /** Current Assets */
    this.totalCash = form.cash
    this.bankCash = form.bank
    this.receivables = form.debtors

     /** fixed Assets */
     this.furniture = form.furniture;
     this.vehicles = form.vehicles;
     this.premises = form.premises;
     this.equipment = form.equipment;

     /**short term liabilities */
     this.loans = form.loans;
     this.shortTermDebt = form.debtsBelow3

     /**Long term liabilities */
     this.longTermDebt = form.debtsOver3

     /**Other business income */
     this.otherBusinessIncome = form.netEarning


  }
  totalCostOfSales(){

   if(this.monthlySales === undefined)
    this.monthlySales = 0;

    // if(this.totalMonthlySales === undefined)
    //    this.totalMonthlySales = 0;

    if(this.totalMonthlySales === undefined){
      this.costOfSales = 0
    }else{

//get sales which is the min of the daily average for the whole month(dailav*4*7) and the sales according to stock n the selling value
    this.sales = Math.min(this.monthlySales,this.totalMonthlySales)

    //get cost of sales
    this.costOfSales = (this.totalPurchases/this.totalMonthlySales) * this.sales
  }
    console.log(this.costOfSales)
  }


}
