import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../services/reports.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
 loanDetails:FormGroup;
  constructor(private report:ReportsService) {}
  ngOnInit(){
    this.loanDetails = new FormGroup({
      loanAmount:new FormControl('',[Validators.required]),
      period:new FormControl('',[Validators.required]),
      installment:new FormControl('',[Validators.required]),
      collateral:new FormControl('',[Validators.required]),
      interest:new FormControl('',[Validators.required])

    })

  }

  submit(){
    console.log("submit")
   this.report.loanDetailsAmnt(this.loanDetails.value)    
   
    
  }

}
