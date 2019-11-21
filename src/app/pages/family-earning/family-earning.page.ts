import { Component, OnInit } from '@angular/core';
import { ReportsService } from 'src/app/services/reports.service';
import * as $ from 'jquery';
import { FamilyEarnings } from './familyEarnings';
@Component({
  selector: 'app-family-earning',
  templateUrl: './family-earning.page.html',
  styleUrls: ['./family-earning.page.scss'],
})
export class FamilyEarningPage implements OnInit {

  spouseExist:string = "No";
  spouseBusiness:string = "No";
  familyEarnings = new FamilyEarnings(null,null,null,null,null,null)
  

  constructor(private report:ReportsService) { }

  ngOnInit() {
    $('#spouse').hide();
    $('#spouseBusiness').hide()
  }
  onSubmit(){
    
    this.report.familyEarningsAmnt(this.familyEarnings)
  }

  spouseCheck(){
    
    if(this.spouseExist==="Yes")
        $('#spouse').show();
  }

  businessCheck(){
    if(this.spouseBusiness==="Yes")
    $('#spouseBusiness').show()
  }

}
