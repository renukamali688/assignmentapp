import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../module/posts';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css']
})
export class PostdetailsComponent implements OnInit {
  productId!:number;
  post!:Post;

  constructor(private _demoservice:DemoService,private route:ActivatedRoute) {
   console.log('From Activated Route',this.route);
   this.route.params.subscribe(params=>{
   console.log('params',params);
   this.productId=params['id'];
   
   this._demoservice.getPostById(this.productId).subscribe(res=>{
    console.log('Post By Id',res);
    this.post = res;

    })
    
   })
   
   }
  ngOnInit(): void {
   
  }

}
