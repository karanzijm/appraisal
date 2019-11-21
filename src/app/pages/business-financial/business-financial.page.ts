import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-business-financial',
  templateUrl: './business-financial.page.html',
  styleUrls: ['./business-financial.page.scss'],
})
export class BusinessFinancialPage implements OnInit {
  businessForm:FormGroup;
  constructor(private fb:FormBuilder) { }

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
      debtsOver3:new FormControl()
    })
  }

}
