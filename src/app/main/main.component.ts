import { Component, OnInit } from '@angular/core';

import { ItemService } from '../item.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers:[ItemService]
})
export class MainComponent implements OnInit {

  items=[];
  constructor(private obj:ItemService) { 
    
  }

  ngOnInit() {
  this.obj.getDefaultProds().subscribe(resposeData=>this.items=resposeData);
  }
}
