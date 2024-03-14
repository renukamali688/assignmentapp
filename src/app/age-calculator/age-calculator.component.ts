import { Component, OnInit } from '@angular/core';
import { AgecalculateserviceService } from '../services/agecalculateservice.service';

@Component({
  selector: 'app-age-calculator',
  templateUrl: './age-calculator.component.html',
  styleUrls: ['./age-calculator.component.css']
})
export class AgeCalculatorComponent implements OnInit {
  birthdate!: Date; // Bind this to your input field for birth date
  age!: number | undefined; // Bind this to your input field for displaying age


  constructor(private _ageCalService: AgecalculateserviceService) { }

  ngOnInit(): void {
  
    
}

calculateAge() {
  const birthDate = new Date(this.birthdate);
 this.age = this._ageCalService.calculateAge(birthDate);
}


}
