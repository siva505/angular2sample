import { Component, OnInit } from '@angular/core';

import { ItemService } from '../item.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css'],
  providers:[ItemService]
})
export class MediaComponent implements OnInit {
  items=[];
  constructor(private obj:ItemService) { 
    
  }

  ngOnInit() {
  this.obj.getkidsProds().subscribe(resposeData=>this.items=resposeData);
  }


}
