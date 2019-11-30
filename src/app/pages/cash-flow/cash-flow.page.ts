import { Component, OnInit, PipeTransform, Pipe } from '@angular/core';
import { ReportsService } from 'src/app/services/reports.service';
import {AkkountingNew} from "./AkkountingNew";
import {Akkounting} from "./Akkounting";

import * as $ from 'jquery';

@Pipe({
  name: 'negToPos'
})

@Component({
  selector: 'app-cash-flow',
  templateUrl: './cash-flow.page.html',
  styleUrls: ['./cash-flow.page.scss'],
})
export class CashFlowPage implements OnInit,PipeTransform {
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
cash:number;
bank:number;
receivables:number;
inventory:number;
currentAssets:number;
furniture:number;
  vehicles:number;
  premises:number;
  equipment:number;
  fixedAssets:number = 0;
  totalAssets:number = 0;
  shortTermLiabilities:number = 0;
  loan:number = 0;
  shortTermDebt:number = 0;
  longTermDebt:number = 0;
  longTermLiabilities:number = 0
  totalLiabilities:number = 0;
  assets:number = 0;
  equity:number = 0;

  loanAmount:number= 0;
  loanTerm:any= 0;
  loanInterest:any= 0;
  installment:number= 0;
  as="Month(s)"

  quickRatio:number =0
  currentRatio:number = 0
  leverage:number=0
  profitability:number=0
  netIncome:number=0;
  operatingIncome:number=0;
  administrativeExpenses:number=0;
  grossProfit:number=0;
  netProfit:number=0;
  Cashflow:number=0;
  netProfitMargin:number=0;
  turnover:number=0
  salesMargin:number = 0;
  operatingProfit:number = 0
  netWorkingCapital:number = 0
  repaymentCapacity:number = 0;
  collateralCoverage:number = 0;
  debtRatio:number = 0;
  household:number = 0;
  loanMonthlySales:number = 0;
  liabilityLoanEquity:number = 0;
  loanWorkingCapital:number = 0;
  collateral:number = 0;
  proposedInstallment:number=0
  repaymentSchedule:any[]





  constructor(private report:ReportsService) { }

  ngOnInit() {
    $('#cashflow').hide();
    $('#balanceSheet').hide();
    $('#loanDetails').show();
    $('#calender').hide();

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

     if(this.report.totalCash === undefined)
         this.report.totalCash = 0;

     if(this.report.spouseCash === undefined)
        this.report.spouseCash = 0
      
      if(this.report.bankCash === undefined)
         this.report.bankCash = 0
      
      if(this.report.totalPurchases === undefined)
        this.report.totalPurchases = 0

      if(this.report.receivables === undefined)
          this.report.receivables = 0;
      if(this.report.loans === undefined)
         this.report.receivables = 0

      if(this.report.longTermDebt === undefined)
        this.report.longTermDebt = 0
      
        if(this.report.shortTermDebt === undefined)
          this.report.shortTermDebt = 0

        if(this.report.loanAmount === undefined)
           this.report.loanAmount = 0

       if(this.report.loanTerm === undefined)
           this.report.loanTerm = 0

        if(this.report.loanInterest === undefined)
           this.report.loanInterest = 0
          
        if(this.report.installment === undefined)
           this.report.installment = 0

        if(this.report.collateral === undefined)
            this.report.collateral = 0;

        if(this.report.proposedInstallment === undefined)
            this.report.proposedInstallment

      this.collateral = this.report.collateral
      this.proposedInstallment = this.report.proposedInstallment

      this.loanAmount = this.report.loanAmount;
      this.loanTerm = this.report.loanTerm;
      this.loanInterest = this.report.loanInterest *12
      this.installment = this.report.installment

      /** CURRENT ASSETS */
    this.receivables = this.report.receivables
    this.inventory = this.report.totalPurchases
    this.cash = this.report.totalCash + this.report.spouseCash
    this.bank = this.report.bankCash
    this.currentAssets = this.cash + this.bank + this.receivables + this.inventory

    /**Fixed Assets */
    this.furniture = this.report.furniture;
    this.equipment = this.report.equipment;
    this.premises = this.report.premises;
    this.vehicles = this.report.vehicles
    this.fixedAssets = this.furniture + this.equipment + this.premises + this.vehicles

    this.totalAssets = this.currentAssets + this.fixedAssets;

      /**short term liabilities */
      this.loan = this.report.loans;
      this.shortTermDebt = this.report.shortTermDebt;
      this.shortTermLiabilities = this.loan + this.shortTermDebt;
 
      /**Long term liabilities */
      this.longTermDebt = this.report.longTermDebt
      this.longTermLiabilities = this.longTermDebt

      this.totalLiabilities = this.shortTermLiabilities + this.longTermLiabilities;

      this.equity = this.totalAssets - this.totalLiabilities;

      this.assets = this.totalLiabilities + this.equity

      let sum1 = this.totalLiabilities + this.loanAmount

      console.log(sum1)

      if(this.shortTermLiabilities !==0){
        this.quickRatio = (this.currentAssets - this.inventory)/this.shortTermLiabilities
        this.currentRatio = this.currentAssets/this.shortTermLiabilities
      }else{
        this.quickRatio = 0;
        this.currentRatio = 0;
      }

      if(this.quickRatio>0.2){
        $('.qR').css('background-color','green')
      }else{
        $('.qR').css('background-color','red')
      }

      if(this.currentRatio>2){
        $('.cR').css('background-color','green')
      }else{
        $('.cR').css('background-color','red')
      }

      if(this.equity !==0){
         this.leverage = this.totalLiabilities/this.equity
         let sum = this.totalLiabilities + this.loanAmount
         this.liabilityLoanEquity = (this.totalLiabilities + this.loanAmount)/this.equity
         console.log(sum)
      }else{
        this.leverage = 0
      }
      console.log("liability and loan")
      console.log(this.totalLiabilities)
      console.log(this.loanAmount)
      //let x = (this.totalLiabilities + this.loanAmount)
     
      console.log("************************")
      console.log("liabilityLoanEquity")
      console.log(this.liabilityLoanEquity)
      if((this.leverage*100)<=66){
        $('.leverage').css('background-color','green')
      }else{
        $('.leverage').css('background-color','red')
      }

      let workingCapitalRatio=0
      if(this.totalLiabilities>0){
        workingCapitalRatio = this.currentAssets/this.shortTermLiabilities
        this.loanWorkingCapital=this.loanAmount/workingCapitalRatio
      }else{
        workingCapitalRatio=0
        this.loanWorkingCapital=0
      }
      console.log("leverage")
      console.log(this.leverage)

      console.log("loanWorkingCapital")
      console.log(this.loanWorkingCapital)

      console.log("workingCapitalRatio")
      console.log(workingCapitalRatio)    


 

      
   this.costOfSales = this.report.costOfSales;
   console.log("cost of sales "+this.costOfSales)


   this.familyEarning = this.report.spouseInflow;

 
   this.sales= this.report.sales;
   console.log(this.sales)


  //  Math.ceil(this.report.familyExpenses)
   this.familyExpense = this.report.familyExpenses;

  //  Math.ceil(this.report.operatingExpense)
   this.businessOperationExpenses = this.report.operatingExpense

   if(this.costOfSales>0){
    this.turnover = (this.sales/this.costOfSales) * 30
   }else{
    this.turnover = 0
   }

   if(this.costOfSales<=51){
    $('.turnover').css('background-color','green')
   }else{
    $('.turnover').css('background-color','red')
   }
   

   this.inflow = this.sales + this.otherBusinessIncome + this.familyEarning;


   this.outflow = this.costOfSales + this.businessOperationExpenses + this.familyExpense


   this.surplus = this.inflow - this.outflow


   this.grossProfit = this.sales - this.costOfSales

   this.operatingIncome = this.grossProfit - this.administrativeExpenses

   this.netIncome = this.operatingIncome;
    
   console.log("sales")
   console.log(this.sales)

   if(this.sales!==0){
    // this.netProfit = this.netIncome/this.sales
    this.netProfit = this.netIncome
    this.salesMargin = (this.sales - this.inventory)/this.sales
   
    this.loanMonthlySales = this.loanAmount/this.sales

    
   }

   console.log("installment")
   console.log(this.installment)

   console.log("netProfit")
   console.log(this.netProfit)

   let debt = this.longTermDebt + this.shortTermDebt
   console.log("debt")
   console.log(debt)

   console.log("totalAssets")
   console.log(this.totalAssets)

   if(this.totalAssets!==0){
     this.profitability = this.netProfit/this.totalAssets;
     this.Cashflow = this.installment/this.netProfit;
     this.netProfitMargin = this.netProfit/this.costOfSales
     this.debtRatio = (debt + this.loanAmount)/this.totalAssets
   }else{
    this.profitability = 0;
   }

   if((this.debtRatio*100)<75){
    $('.debtRatio').css('background-color','green')
   }else{
    $('.debtRatio').css('background-color','red')
   }

   if(this.netProfitMargin>=6){
    $('.netProfitMargin').css('background-color','green')
   }else{
    $('.netProfitMargin').css('background-color','green')
   }

   console.log("profitability")
   console.log(this.profitability)

  if((this.profitability*100)>3){
    $('.profitability').css('background-color','green')
  }else{
    $('.profitability').css('background-color','red')
  }
  console.log("Cashflow")
  console.log(this.Cashflow)
  if((this.Cashflow*100)<=45){
     $('.Cashflow').css('background-color','green')
  }else{
    $('.Cashflow').css('background-color','red')
  }

   this.operatingProfit = this.grossProfit - this.businessOperationExpenses
   this.netWorkingCapital = this.currentAssets - this.shortTermLiabilities

   if(this.loanAmount>0)
   this.collateralCoverage = this.collateral/this.loanAmount
   console.log("collateralCoverage")
   console.log(this.collateralCoverage)
   if((this.collateralCoverage*100)>80){
    $('.collateralCoverage').css('background-color','green')
   }else{
    $('.collateralCoverage').css('background-color','red')
   }
   
   if(this.surplus>0){
    this.repaymentCapacity = this.proposedInstallment/this.surplus
    this.household = this.familyExpense/this.surplus
   }else{
    this.repaymentCapacity = 0;
   }
console.log("household")
console.log(this.household)
   if((this.household*100)>30){
    $('.household').css('background-color','green')
   }else{
    $('.household').css('background-color','red')
   }

   if ((this.repaymentCapacity*100)<60) {
    $('.repaymentCapacity').css('background-color','green')
   }else{
    $('.repaymentCapacity').css('background-color','red')
   }

   //this.calender()
    

  }

  balanceSheet() {
   
    $('#cashflow').hide();
    $('#loanDetails').hide();
    $('#balanceSheet').show();
    $('#calender').hide();
  }
  loanDetails(){
    $('#cashflow').hide();
    $('#balanceSheet').hide();
    $('#loanDetails').show();
    $('#calender').hide();
  }
  cashFlow(){
    $('#cashflow').show();
    $('#balanceSheet').hide();
    $('#loanDetails').hide();
    $('#calender').hide();
  }

  isNegitive(val: number): boolean {
    if (val < 0) {
      console.log("negative")
     return true;
    } else {
     return false
    }
   }

   transform(val: number): number {
    return Math.abs(val);
  }

  calender(){
    $('#calender').show();
    $('#cashflow').hide();
    $('#balanceSheet').hide();
    $('#loanDetails').hide();

    let method = "reducing_rate";
    let number_of_payments=new Akkounting().getNoOfPaymentsOne(this.loanTerm,'Month(s)',1,'Month(s)')
    let intRate = new Akkounting().newConvertPercentages('Month(s)',(this.loanInterest*100))
    console.log(intRate)
    let schedule = new AkkountingNew(this.loanAmount,intRate,number_of_payments,0,new Date(),method,"Month(s)",1)
    this.repaymentSchedule = schedule.amortizedSchedule

  }

}
