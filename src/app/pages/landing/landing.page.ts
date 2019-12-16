import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MenuOptionsPage } from '../menu-options/menu-options.page';
import { OptionsService } from 'src/app/services/options.service';
import { Router } from '@angular/router';
import { ReportsService } from 'src/app/services/reports.service';
import { DatabaseService, Proj } from 'src/app/services/database.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

   projectName:string;
   category:string;
   projectDescription:string;
   appraisals: Proj[] = [];

  constructor(
    public modalController: ModalController,
    public report:ReportsService,
    public router:Router,
    private db:DatabaseService
    ) { }

  ngOnInit() {

    this.db.getDatabaseState().subscribe(ready => {
      if (ready) {
        this.db.getProj().subscribe(devs => {
          console.log('devs changes: ',devs);
          this.appraisals = devs;
        });
        //this.products = this.db.getProducts();
      }
    })
    this.projectName = this.report.projectName;
     this.projectDescription = this.report.projectDescription;
    this.category = this.report.projectCategory;

    console.log(this.projectName)
  }

  add(){
    this.router.navigate(['/menu/home'])

  }

  edit(){

  }

  view(){
    this.router.navigate(['/menu/cash-flow'])
  }

  delete(){

  }

  addProject(){
    this.router.navigate(['/project-creation'])
  }

}
