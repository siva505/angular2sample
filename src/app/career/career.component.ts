import { Component, OnInit } from '@angular/core';

import { ItemService } from '../item.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css'],
  providers:[ItemService]
})
export class CareerComponent implements OnInit {
  items=[];
  constructor(private obj:ItemService) { 
    
  }

  ngOnInit() {
  this.obj.getshoeProds().subscribe(resposeData=>this.items=resposeData);
  }

}
