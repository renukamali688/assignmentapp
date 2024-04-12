import { Component, OnInit } from '@angular/core';
import { GifyService } from '../services/gify.service';

@Component({
  selector: 'app-gify',
  templateUrl: './gify.component.html',
  styleUrls: ['./gify.component.css']
})
export class GifyComponent implements OnInit {
  gifs: any[] = [];
  hditem:any[] = [];
  giphyData:[] = [];
  totalItems: number = 25;
  pageSize: number = 5;
  currentPageIndex: number = 0;

  constructor(private _gifyservice: GifyService) { }

  ngOnInit(){
    this._gifyservice.getgify(5, 0).subscribe(res =>{
      console.log('gify',res.data);
      this.gifs = res.data;
      this.totalItems = res.pagination.total_count;
      console.log(this.totalItems);
     
      
    })
   
  }
  onPageChange(event:any) {
    const offset = event.pageIndex * this.pageSize;
    this._gifyservice.getgify(this.pageSize, offset).subscribe((response: any) => {
    this.giphyData = response.data;
    console.log(this.giphyData);
    

   
    });
  }
  
}
