import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Stock } from './stock';


@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.page.html',
  styleUrls: ['./add-stock.page.scss'],
})
export class AddStockPage implements OnInit {

  productName:String;
  quantity:number;
  cost:number;
  price:number;

  stock=new Stock("",0,0,0);

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    
       this.modalCtrl.dismiss();    
  } 
  addStock(){
    
    console.log(this.stock)
    this.modalCtrl.dismiss(this.stock);
  }

}
