import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ItemService } from '../item.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers:[ItemService],
  inputs: ['cartItem','count']
})
export class AboutComponent implements OnInit {
  @Input() count: number;
  @Output() countChange: EventEmitter<number>;
  items=[];
  isActive=false;
  constructor(private obj:ItemService) { 
    this.count = 0;
    this.countChange = new EventEmitter<number>();
  }

  ngOnInit() {
  this.obj.getItems().subscribe(resposeData=>this.items=resposeData);
  }
  getActive(){
    if(!this.isActive) {
      this.isActive=true;
    }else{
      this.isActive=false;
    }
  }
  pushToCart(cartItem){    
    console.log("push to cart"+JSON.stringify(this.obj.cartItems));   
    this.obj.addToCart(cartItem);
    this.count++;
    this.countChange.emit(this.count);
  }
}
