// space-search.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpaceSearchService {

  apiUrl = 'https://en.wikipedia.org/w/api.php'; // Or your API endpoint

  constructor(private http: HttpClient) { }

  searchSpace(query: string): Observable<any> {
    const params = {
      action: 'query',
      format: 'json',
      list: 'search',
      utf8: '1',
      srsearch: query,
      origin: '*'
    };

    return this.http.get(this.apiUrl, { params });
  }
}