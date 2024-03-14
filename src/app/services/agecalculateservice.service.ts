import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgecalculateserviceService {
  
  constructor() { 
   
}
// calculateAge(birthDate: any ) {
//   const today = new Date();
//   const birthDateObj = new Date('birthDate');
//   let age = today.getFullYear() - birthDateObj.getFullYear();
//   const monthDiff = today.getMonth() - birthDateObj.getMonth();
//   if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
//     age--;
//   }
//   return age;
// }

calculateAge(birthdate: Date) {
  var age;
  const birthDate = new Date(birthdate);
  if (birthDate instanceof Date) {
    const timeDiff = Math.abs(Date.now() - birthDate.getTime());
     age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
    
  } else {
    console.error('Invalid birthdate. Please enter a valid date.');
  }

  return age;
}



}

