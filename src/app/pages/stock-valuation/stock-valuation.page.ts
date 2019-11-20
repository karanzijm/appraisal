import { Component, OnInit, ɵConsole, ChangeDetectorRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddStockPage } from '../add-stock/add-stock.page';



@Component({
  selector: 'app-stock-valuation',
  templateUrl: './stock-valuation.page.html',
  styleUrls: ['./stock-valuation.page.scss'],
})
export class StockValuationPage implements OnInit {

tableStyle = 'bootstrap';
dataReturned:any;
product:any[]=[];
  constructor(public modalController: ModalController,
    private cdr: ChangeDetectorRef) { }
  
  ngOnInit() {
    console.log(this.product)
  }

  switchStyle(){

  }

  getRowClass(row){

  }

  async open(row){

  }

  addStocks(){
    console.log("add stock")
    this.presentModal()
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: AddStockPage
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.product.push(dataReturned.data)
        this.cdr.detectChanges();
        this.ngOnInit()
     
      }
     

    });

    return await modal.present();

  }






}
