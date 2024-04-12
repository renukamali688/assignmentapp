import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SpaceSearchService } from '../services/space-search.service';

@Component({
  selector: 'app-space-searches',
  templateUrl: './space-searches.component.html',
  styleUrls: ['./space-searches.component.css']
})
export class SpaceSearchesComponent implements OnInit, OnChanges {
  searchQuery: string = '';
  searchResults!: any[];
  wordCount: number = 0;
  //isShow: boolean = false;
  @Input() search: any;
  constructor(private _spaceSearchService: SpaceSearchService) { }
  ngOnChanges(changes: SimpleChanges): void {
   
   let val  = changes["search"].firstChange;
    console.log('get vale', val);
    
    console.log('OnChanges',changes);
    console.log('hfhgfhgf', this.search);
    
    // if (val != true) {
    //   this.isShow = true;
    // }

    if (this.search != undefined) {
      this._spaceSearchService.searchSpace(this.search).subscribe(
        (data: any) => {
         
          this.searchResults = data.query.search;
          console.log(this.searchResults); 
        },
        error => {
          console.error('Error fetching data:', error);
         // this.isShow = false;
        }
      );
    }
    
  }
  
  ngOnInit(): void {
  }

  searchSpace() {
    if (this.searchQuery.trim() === '') {
      // You can handle empty search query here if needed
      return;
    }

    this._spaceSearchService.searchSpace(this.search).subscribe(
      (data: any) => {
       
        
        this.searchResults = data.query.search;
        console.log(this.searchResults);
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );

     // Update word count
     this.updateWordCount();
  }

  updateWordCount() {
    // Split the search query by space and count the number of words
    const words = this.searchQuery.trim().split(/\s+/);
    this.wordCount = words.length;
  }
}

