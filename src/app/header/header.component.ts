import { Component, OnInit, Input } from '@angular/core';

import { ItemService } from '../item.service';
import { AboutComponent } from '../about/about.component';
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[ItemService]
})
export class HeaderComponent implements OnInit {
  @Input() count: number;
  cartItems:any[];
  total:any[];
  constructor(private obj:ItemService) { 
    
  }

  ngOnInit() {
    this.cartItems=this.obj.getFromCart();  
     this.total=this.obj.cartItems["price"];
  } 

}
