import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ReportsService } from 'src/app/services/reports.service';

@Component({
  selector: 'app-business-financial',
  templateUrl: './business-financial.page.html',
  styleUrls: ['./business-financial.page.scss'],
})
export class BusinessFinancialPage implements OnInit {
  businessForm:FormGroup;
  netEarning:number;
  cash:number;
  debtors:number;
  furniture:number;
  equipment:number;
  vehicles:number;
  premises:number;
  loans:number;
  debtsBelow3:number;
  debtsOver3:number;
  total:number;
  bank:number;
  constructor(private fb:FormBuilder,private report:ReportsService) { }

  ngOnInit() {
    this.businessForm = this.fb.group({
      netEarning:new FormControl(),
      cash:new FormControl(),
      debtors:new FormControl(),
      furniture:new FormControl(),
      equipment:new FormControl(),
      vehicles:new FormControl(),
      premises:new FormControl(),
      loans:new FormControl(),
      debtsBelow3:new FormControl(),
      debtsOver3:new FormControl(),
      bank:new FormControl()
    })
  }

  totalFinances(){
    this.total = 0
    this.netEarning = this.businessForm.controls['netEarning'].value
    if(this.netEarning===null)
       this.netEarning=0

    this.cash = this.businessForm.controls['cash'].value
    if(this.cash===null)
      this.cash = 0

    this.debtors =  this.businessForm.controls['debtors'].value
    if(this.debtors===null)
      this.debtors= 0

    this.furniture = this.businessForm.controls['furniture'].value
    if(this.furniture===null)
    this.furniture = 0

    this.equipment = this.businessForm.controls['equipment'].value
    if(this.equipment===null)
    this.equipment = 0

    this.vehicles = this.businessForm.controls['vehicles'].value
    if(this.vehicles===null)
    this.vehicles = 0

    this.premises = this.businessForm.controls['premises'].value
    if(this.premises===null)
    this.premises = 0

    this.loans = this.businessForm.controls['loans'].value
    if(this.loans===null)
    this.loans = 0

    this.debtsBelow3 = this.businessForm.controls['debtsBelow3'].value
    if(this.debtsBelow3===null)
    this.debtsBelow3 = 0

    this.debtsOver3 = this.businessForm.controls['debtsOver3'].value
    if(this.debtsOver3===null)
    this.debtsOver3 = 0;

    this.bank =  this.businessForm.controls['bank'].value
    if(this.bank ===null)
    this.bank=0

    this.total = this.cash + this.debtors + this.debtsBelow3 + this.debtsOver3 + this.equipment + this.furniture
                  +this.loans + this.netEarning + this.premises + this.vehicles + this.bank
  }

  submit(){
       this.report.businessFinancialAmnt(this.total,this.businessForm.value)
  }

}
