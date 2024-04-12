import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';
import { Post } from '../module/posts';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {
  posts: Post[]=[];

  constructor(private _demoservice:DemoService) { }

  ngOnInit(): void {
    this._demoservice.getPosts().subscribe(res=>{
      this.posts=res;
      
    })
  }

}
