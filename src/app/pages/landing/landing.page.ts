import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MenuOptionsPage } from '../menu-options/menu-options.page';
import { OptionsService } from 'src/app/services/options.service';
import { Router } from '@angular/router';
import { ReportsService } from 'src/app/services/reports.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

   projectName:string;
   category:string;
   projectDescription:string;

  constructor(
    public modalController: ModalController,
    public report:ReportsService,
    public router:Router
    ) {this.ngOnInit() }

  ngOnInit() {
    this.projectName = this.report.projectName;
     this.projectDescription = this.report.projectDescription;
    this.category = this.report.projectCategory;

    console.log(this.projectName)
  }

  add(){
    this.router.navigate(['/menu/home'])

  }

  // async presentModal(){
  //   const modal = await this.modalController.create({
  //     component: MenuOptionsPage,
  //     componentProps:this.option.available
  //   });

  //   modal.onDidDismiss().then((dataReturned) => {
  //     if (dataReturned !== null) {     
  //       console.log(dataReturned.data)
  //       this.router.navigate(['/menu',dataReturned.data])
     
  //     }
     

  //   });

  //   return await modal.present();
  // }

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
