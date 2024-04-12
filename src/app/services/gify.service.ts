import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class GifyService {
 
  apiurl = 'https://api.giphy.com/v1/gifs/trending?api_key=jd3PQeuBA7xplOtAWRYiUIdlYAMwIKif&limit=25&offset=0&rating=g&bundle=messaging_no'
  constructor(private _httpClient:HttpClient) { }

  getgify(limit: number, offset: number): Observable<any>{
  return this._httpClient.get<any>('https://api.giphy.com/v1/gifs/trending?api_key=jd3PQeuBA7xplOtAWRYiUIdlYAMwIKif&limit=25&offset=0&rating=g&bundle=messaging_no');
 
  }
}

