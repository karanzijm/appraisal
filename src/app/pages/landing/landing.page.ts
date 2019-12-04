import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MenuOptionsPage } from '../menu-options/menu-options.page';
import { OptionsService } from 'src/app/services/options.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor(
    public modalController: ModalController,
    public option:OptionsService,
    public router:Router
    ) { }

  ngOnInit() {
    this.option.ngOnInit()
  }

  add(){
   this.presentModal()
  }

  async presentModal(){
    const modal = await this.modalController.create({
      component: MenuOptionsPage,
      componentProps:this.option.available
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {     
        console.log(dataReturned.data)
        this.router.navigate(['/menu',dataReturned.data])
     
      }
     

    });

    return await modal.present();
  }

  edit(){

  }

  view(){
    this.router.navigate(['/menu/cash-flow'])
  }

  delete(){

  }

}
