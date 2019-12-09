import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../services/reports.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OptionsService } from '../services/options.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

disabled:boolean = true
 loanDetails:FormGroup;
 validation_messages = {
  'loanAmount': [
    { type: 'required', message: 'Loan Amount is required.' },
    { type: 'min', message: 'The minimum loan amount is 0.' },
    
  ],
  'period': [
    { type: 'required', message: 'Loan Period is required.' },
    { type: 'min', message: 'The minimum loan period is 1.' },
  ],
  'interest': [
    { type: 'required', message: 'Loan Interest is required.' },
    { type: 'min', message: 'The minimum loan interest is 0.' },
    { type: 'max', message: 'The maximum loan Installment is 100%.'}
  ],
  'installment': [
    { type: 'required', message: 'Loan Installment is required.' },
    { type: 'min', message: 'The minimum loan Installment is 0.' }
    
  ],
 }

  constructor(
    private report:ReportsService,
    private router:Router,
    private option:OptionsService,
    public toastController: ToastController
    ) {}

  ngOnInit(){
    
    this.loanDetails = new FormGroup({
      loanAmount:new FormControl('',[Validators.required,Validators.min(0)]),
      period:new FormControl('',[Validators.required,Validators.min(1)]),
      periodUnit:new FormControl('',[]),
      installment:new FormControl('',[Validators.required,Validators.min(0)]),
      collateral:new FormControl('',[Validators.required,Validators.min(0)]),
      interest:new FormControl('',[Validators.required,Validators.min(0),Validators.max(100)]),
      frequency:new FormControl(),
      interestMethod:new FormControl()

    })
    this.loanDetails.controls['frequency'].setValue('Day(s)')
    this.loanDetails.controls['interestMethod'].setValue('flat_rate')


  }

  submit(){
    console.log("submit")
    if(this.loanDetails.valid){
      this.report.loanDetailsAmnt(this.loanDetails.value)    
      this.option.add("home")
      this.disabled = false
      this.router.navigate(['/menu/family-earning'])
   

    }
    else{
      this.presentToast("Please Fill the form")
      return
    }
   
    
  }

  // redirect(){
  //   this.router.navigate(['/menu/family-earning'])
  // }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }

}
