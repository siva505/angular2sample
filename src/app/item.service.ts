import { Injectable} from '@angular/core';
import {Http,Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ItemService {
  cartItems:any[]
  constructor(private http:Http) {
    this.cartItems = [];
   }

  getItems() {
    return this.http.get('./assets/menitem.json')
                 .map((response:Response) => response.json());
  }

  getWomenProds() {
    return this.http.get('./assets/womenitem.json')
                 .map((response:Response) => response.json());
  }

  getkidsProds() {
    return this.http.get('./assets/kidsitem.json')
                 .map((response:Response) => response.json());
  }

  getshoeProds() {
    return this.http.get('./assets/shoeitem.json')
                 .map((response:Response) => response.json());
  }

  getDefaultProds() {
    return this.http.get('./assets/default.json')
                 .map((response:Response) => response.json());
  }

  addToCart(cartItem:any){  
   console.log("addto cart"+this.cartItems);
    this.cartItems.push(cartItem);
   // return this.getFromCart();
  }
  getFromCart(){
    console.log("cartItems(price)");
    return this.cartItems;
  }
}