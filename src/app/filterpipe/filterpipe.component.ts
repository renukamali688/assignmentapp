import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-filterpipe',
  templateUrl: './filterpipe.component.html',
  styleUrls: ['./filterpipe.component.css']
})
export class filterpipeComponent implements OnInit {

  users: any;
  namesearch: string = '';
  // inject the demoservice
  constructor(private _demoService: DemoService) { }

  ngOnInit(): void {

    this._demoService.getUsers().subscribe(res => {
      console.log(res); // 10 users 
      this.users = res;
    })
  }

}