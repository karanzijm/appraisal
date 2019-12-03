import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  
  pages = [
    {
      title:'Landing',
      url:'/menu/landing',
      icon:'eye'
    },
    {
      title: 'Loan Details',
      url: '/menu/home',
      icon: 'water'
    },
    {
      title: 'Family Earning',
      url: '/menu/family-earning',
      icon: 'Planet'
    },
    {
      
        title: 'Family Expenses',
        url: '/menu/family-expenses',
        icon: 'Planet'
      
    },
    {
      
      title: 'Operating Expense',
      url: '/menu/operating-expenses',
      icon: 'Planet'
    
  },
    {
      title: 'Stock valuation',
      url: '/menu/stock-valuation',
      icon: 'Planet'
    },
    {
      title: 'Sales Metrics',
      url: '/menu/daily-sales-metrics',
      icon: 'Planet'
    },
    {
      title: 'Business Financial',
      url: '/menu/business-financial',
      icon: 'Planet'
    },
    {
      title: 'Report',
      url: '/menu/cash-flow',
      icon: 'Planet'
    }
    

  ];
  selectedPath=''

  constructor(private router:Router) {
    this.router.events.subscribe((event: RouterEvent)=>{
      this.selectedPath = event.url
    })
   }

  ngOnInit() {
  }


}
