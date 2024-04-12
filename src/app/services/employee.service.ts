import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  apiUrl='http://localhost:3000/employee';

  constructor(private _httpClient: HttpClient) { }

  saveEmployee(data: any) : Observable<any>{
   return this._httpClient.post(this.apiUrl, data);
  }
}
