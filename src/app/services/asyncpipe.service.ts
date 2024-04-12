import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Asynchpipe {
    fetchData1(): Promise<number[]> {
      return new Promise<number[]>((resolve, reject) => {
        // Simulated async data fetching
        setTimeout(() => {
          resolve([279976548754, 764587469847, 874676548346, 873476457345, 287364538736]);
        }, 1000);
      });
    }
    fetchData2(): Promise<string[]> {
      return new Promise<string[]>((resolve, reject) => {
        // Simulated async data fetching
        setTimeout(() => {
          resolve(['Rohit Sharma', 'Shubman Gill', 'Washington Sundar', 'Yashasvi Jaiswal', 'Ravindra Jadeja']);
        }, 1500);
      });
    }
    fetchData3(): Promise<any[]> {
      return new Promise<any[]>((resolve, reject) => {
        // Simulated async data fetching
        setTimeout(() => {
          resolve([279976548754,'Rohit Sharma',764587469847, 'Shubman Gill', 874676548346, 'Washington Sundar']);
        }, 1500);
      });
    }
  }
  
 
   