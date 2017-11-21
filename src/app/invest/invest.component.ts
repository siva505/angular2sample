import { Component, OnInit } from '@angular/core';

import { ItemService } from '../item.service';

@Component({
  selector: 'app-invest',
  templateUrl: './invest.component.html',
  styleUrls: ['./invest.component.css'],
  providers:[ItemService]
})
export class InvestComponent implements OnInit {
  items=[];
  constructor(private obj:ItemService) { 
    
  }

  ngOnInit() {
    this.obj.getWomenProds().subscribe(resposeData=>this.items=resposeData);
  }

}
