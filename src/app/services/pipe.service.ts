import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PipeService {

  constructor() { }

  
  fetchData(): Promise<any> {
    // Assuming some asynchronous operation here, like fetching data from an API
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = ['Angular', 'JavaScript', 'Java', '.Net'];
        resolve(data);
      }, 2000); // Simulating a delay of 2 seconds
    });
  }

}
