import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pass-generator',
  templateUrl: './pass-generator.component.html',
  styleUrls: ['./pass-generator.component.css']
})
export class PassGeneratorComponent implements OnInit {
  passwordLength: number=5;
  includeLetters: boolean = true;
  includeNumbers: boolean = true;
  includeSymbols: boolean = true;
  generatedPassword: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(myform: NgForm) {
    console.log(myform);
    
  }
  generatePassword() {
    let characters = '';
    if (this.includeLetters) // if check box selected 
    {
      characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    }
    if (this.includeNumbers) {
      characters += '0123456789';
    }
    if (this.includeSymbols){
      characters += '!@#$%^&*()_+{}|:<>?-=[];,\./';
    } 

    let password = '';
    for (let i = 0; i < this.passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    this.generatedPassword = password;
  }

}
