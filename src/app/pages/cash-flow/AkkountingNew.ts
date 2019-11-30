import {Akkounting} from './Akkounting';

export class AkkountingNew {
// Try edit message
  data = {
    principal:null,
    interestRate:null,
    noOfPayments:null,
    gracePeriod:null,
    startDate:null,
    interestMethod:null
  }
  scheduleItem:any={};
  amortizedSchedule=[];
  interestPayable:any;
  paymentPerPeriod:any;
  totalAmountToPayBack:any;
  interestToBeEarned:any;
  interestToPrincipalRatio:any;
  effectiveTotalNoOfPayments:any;
  repaymentFreqCode: any;
  repaymentFreqVal: any;

  constructor(principal:any, interest:any,noOfPayments:any,graceperiod:any,
              startDate:any,interestMethod:any,repmnt_freq_cd,rpmt_freq_val){
    this.data.principal = principal;
    this.data.interestRate = interest;
    this.data.noOfPayments = noOfPayments;
    if(graceperiod==null || graceperiod==undefined){
      this.data.gracePeriod = 0;
    }else{
      this.data.gracePeriod = graceperiod;
    }
    this.data.startDate = startDate;
    this.data.interestMethod = interestMethod
    this.repaymentFreqVal = rpmt_freq_val;
    this.repaymentFreqCode = repmnt_freq_cd;

    this.generateFirstItem();
  }
// reducingBalance

  generateFirstItem(){

    this.effectiveTotalNoOfPayments = this.data.noOfPayments - this.data.gracePeriod
    this.scheduleItem.openingbal = this.data.principal;
    if(this.data.interestMethod=="flat_rate"){
      this.interestPayable = this.data.interestRate*this.data.principal
      this.paymentPerPeriod =  ((this.data.principal+this.data.interestRate*this.data.principal*this.effectiveTotalNoOfPayments)/this.effectiveTotalNoOfPayments)
    }else if(this.data.interestMethod=="reducing_rate"){
      this.interestPayable = this.data.interestRate*this.scheduleItem.openingbal
      this.paymentPerPeriod = ((this.data.principal*this.data.interestRate*Math.pow((this.data.interestRate+1),this.effectiveTotalNoOfPayments)))/((Math.pow((this.data.interestRate+1),this.effectiveTotalNoOfPayments))-1)
    }
    this.interestToBeEarned  = (this.paymentPerPeriod*this.effectiveTotalNoOfPayments)-this.data.principal + this.interestPayable * this.data.gracePeriod
    this.totalAmountToPayBack = this.data.principal+this.interestToBeEarned
    this.interestToPrincipalRatio  = (this.interestToBeEarned/this.data.principal)*100
    this.scheduleItem.number = 1;
    this.scheduleItem.startDate =  this.data.startDate;
    this.scheduleItem.intpayable = this.interestPayable;
    if(this.data.gracePeriod>1){
      this.scheduleItem.prinpayable = 0;
    }else{
      this.scheduleItem.prinpayable = this.paymentPerPeriod - this.scheduleItem.intpayable;
    }
    if(this.data.gracePeriod>=1){
      this.scheduleItem.installmentamount = this.scheduleItem.intpayable;
    }else{
      this.scheduleItem.installmentamount = this.paymentPerPeriod;
    }


    this.scheduleItem.closingbal = this.scheduleItem.openingbal - this.scheduleItem.prinpayable;
    this.scheduleItem.totalpaid = this.scheduleItem.installmentamount;
    if((this.scheduleItem.totalpaid-this.totalAmountToPayBack)>0){
      this.scheduleItem.gracepprovision = this.scheduleItem.totalpaid - this.totalAmountToPayBack;
    }else{
      this.scheduleItem.gracepprovision = this.totalAmountToPayBack - this.scheduleItem.totalpaid;
    }
//Push first schedule item
    this.amortizedSchedule.push(this.scheduleItem)
    this.scheduleItem={}
    while(this.amortizedSchedule.length<this.data.noOfPayments){
      let item = this.generateOtherItems(this.amortizedSchedule)
      // console.log(item)
      this.amortizedSchedule.push(item)
      this.scheduleItem={}
    }
    return this.amortizedSchedule;
  }//End of function


 generateOtherItems(array){
  if(array.length>0){
    let interestPayable;
    let paymentPerPeriod;
    let lastItemIndex = array.length - 1;
    let lastSchecudleItem = array[lastItemIndex];
    this.scheduleItem.number = lastSchecudleItem.number+1
    if(this.repaymentFreqCode=="Year(s)"){
      this.scheduleItem.startDate = new Date(lastSchecudleItem.startDate.setFullYear(lastSchecudleItem.startDate.getFullYear()+this.repaymentFreqVal))
    }if(this.repaymentFreqCode=="Month(s)"){
      this.scheduleItem.startDate =  new Date( lastSchecudleItem.startDate.setMonth(lastSchecudleItem.startDate.getMonth()+this.repaymentFreqVal))
    }else if(this.repaymentFreqCode=="Week(s)"){
      this.scheduleItem.startDate = new Date( lastSchecudleItem.startDate.setDate(lastSchecudleItem.startDate.getDate()+this.repaymentFreqVal*7))
    }else if(this.repaymentFreqCode=="Day(s)"){
      this.scheduleItem.startDate = new Date(lastSchecudleItem.startDate.setDate(lastSchecudleItem.startDate.getDate()+this.repaymentFreqVal))


    }
    if(this.data.noOfPayments!=0){
      if(lastSchecudleItem.gracepprovision<0.1){
        this.scheduleItem.openingbal = 0
      }else{
        this.scheduleItem.openingbal = lastSchecudleItem.closingbal;
      }
    }
    if(this.data.interestMethod=="flat_rate"){
      interestPayable = this.data.interestRate*this.data.principal
      paymentPerPeriod =  ((this.data.principal+this.data.interestRate*this.data.principal*this.effectiveTotalNoOfPayments)/this.effectiveTotalNoOfPayments)
    }else if(this.data.interestMethod=="reducing_rate"){
      interestPayable = this.data.interestRate*this.scheduleItem.openingbal
      paymentPerPeriod = ((this.data.principal*this.data.interestRate*Math.pow((this.data.interestRate+1),this.effectiveTotalNoOfPayments)))/((Math.pow((this.data.interestRate+1),this.effectiveTotalNoOfPayments))-1)
    }
//interest payabele
    if(this.scheduleItem.openingbal==0){
      this.scheduleItem.intpayable = 0;
    }else{
      this.scheduleItem.intpayable = interestPayable;
    }

    //installment amount
    if(this.data.gracePeriod>=this.scheduleItem.number){
      this.scheduleItem.installmentamount = this.scheduleItem.intpayable;
    }else{
      if(this.scheduleItem.openingbal==0){
        this.scheduleItem.installmentamount = 0;
      }else{
        this.scheduleItem.installmentamount = paymentPerPeriod;

      }
    } //End of installment payable

    if(this.scheduleItem.prinpayable==0){
      this.scheduleItem.prinpayable = 0;
    }else{
      if(this.data.gracePeriod>=this.scheduleItem.number){
        this.scheduleItem.prinpayable = 0;
      }else{
        this.scheduleItem.prinpayable = this.scheduleItem.installmentamount - this.scheduleItem.intpayable
      }
    }

    if(this.data.noOfPayments!=null){
      if(lastSchecudleItem.gracepprovision<0.1){
        this.scheduleItem.closingbal = 0;
      }else{
        this.scheduleItem.closingbal = this.scheduleItem.openingbal-this.scheduleItem.prinpayable
      }
    }
    if(this.scheduleItem.installmentamount==0){
      this.scheduleItem.totalpaid = 0;
    }
    if(lastSchecudleItem.openingbal+lastSchecudleItem.intpayable==paymentPerPeriod){
      this.scheduleItem.totalpaid = 0;
    }else{
      this.scheduleItem.totalpaid = lastSchecudleItem.totalpaid+this.scheduleItem.installmentamount;
    }

    if((this.scheduleItem.totalpaid-this.totalAmountToPayBack)>0){
      this.scheduleItem.gracepprovision = this.scheduleItem.totalpaid - this.totalAmountToPayBack;
    }else{
      this.scheduleItem.gracepprovision = this.totalAmountToPayBack - this.scheduleItem.totalpaid;
    }
    return this.scheduleItem
  }
}//End of function

}

