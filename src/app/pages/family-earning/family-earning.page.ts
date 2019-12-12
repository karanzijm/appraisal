import { Component, OnInit } from '@angular/core';
import { ReportsService } from 'src/app/services/reports.service';
import * as $ from 'jquery';
import { FamilyEarnings } from './familyEarnings';
import { OptionsService } from 'src/app/services/options.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-family-earning',
  templateUrl: './family-earning.page.html',
  styleUrls: ['./family-earning.page.scss'],
})
export class FamilyEarningPage implements OnInit {

  spouseExist:string = "No";
  spouseBusiness:string = "No";
  familyEarnings = new FamilyEarnings(null,null,null,null,null,null)
  

  constructor(private report:ReportsService,private option:OptionsService,private router:Router) { }

  ngOnInit() {
    $('#spouse').hide();
    $('#spouseBusiness').hide()
  }
  onSubmit(){
    
    this.report.familyEarningsAmnt(this.familyEarnings)    
    this.router.navigate(['/menu/family-expenses'])
    
    
  }

  // redirect(){
    
  //   this.router.navigate(['/menu/family-expenses'])
  // }

  spouseCheck(){
    
    if(this.spouseExist==="Yes")
        $('#spouse').show();
  }

  businessCheck(){
    if(this.spouseBusiness==="Yes")
    $('#spouseBusiness').show()
  }

}
