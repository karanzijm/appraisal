import { Component, OnInit, ɵConsole, ChangeDetectorRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddStockPage } from '../add-stock/add-stock.page';
import { ReportsService } from 'src/app/services/reports.service';
import { OptionsService } from 'src/app/services/options.service';



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
    private report: ReportsService,
    private option:OptionsService
    ) { }
  
  ngOnInit() {
   
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
        let stock = dataReturned.data.quantity * dataReturned.data.cost
        let margin =((((dataReturned.data.price * dataReturned.data.quantity)-(dataReturned.data.cost * dataReturned.data.quantity))*100)/(dataReturned.data.price * dataReturned.data.quantity))
        dataReturned.data.stock = stock
        dataReturned.data.margin = margin
        console.log(stock+" "+margin)
        this.product.push(dataReturned.data)
        this.report.stockValuationAmnt(this.product)
        this.option.add("stock-valuation")
        
     
      }
     

    });

    return await modal.present();

  }






}
