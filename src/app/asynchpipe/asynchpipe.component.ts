import { Component, OnInit } from '@angular/core';
import { Asynchpipe } from '../services/asyncpipe.service';
@Component({
  selector: 'app-asynchpipe',
  templateUrl: './asynchpipe.component.html',
  styleUrls: ['./asynchpipe.component.css']
})
export class AsynchpipeComponent implements OnInit {
    data1$!: number[];
    data2$!: string[];
    data3$!: any[];
  
    constructor(private _asynchpipe: Asynchpipe) {}
  
    ngOnInit() {
      Promise.all([this._asynchpipe.fetchData1(), this._asynchpipe.fetchData2(),this._asynchpipe.fetchData3()])
        .then(([data1, data2, data3]) => {
          this.data1$ = data1;
          this.data2$ = data2;
          this.data3$ = data3;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  }
  

