import { Component, OnInit, Pipe } from '@angular/core';
import { Observable } from 'rxjs';
import { PipeService } from '../services/pipe.service';
import {MatTreeNestedDataSource, MatTreeModule} from '@angular/material/tree';


@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
  

})
export class PipeComponent implements OnInit {
  data$!: Promise<any>;
  
  constructor(private _pipeService: PipeService) { }

  ngOnInit(): void {
    this.data$ = this._pipeService.fetchData();
  }

  
 
}
