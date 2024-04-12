import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  checkUsernameAndPwd(username:any,password:any){
    if (username == 'Codemind@gmail.com' && password == 123456) {
      return true;
      
    }else{
      return false;
    }

  }
}
