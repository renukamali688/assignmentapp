import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  data: any;
  constructor() { }

  ngOnInit(): void {
  }

  searchSpace(val:any)
  {
    alert(val);
    this.data = val;
  }
}
