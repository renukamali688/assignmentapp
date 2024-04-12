import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent implements OnInit {

myFormRegistration!:FormGroup;
genders=['Male','Female','other'];
cityes=['Mumbai','Pune','Delhi'];
imgUrl:string =' assets/images/registration3.jpg';
constructor(private _fb:FormBuilder, private _employee:EmployeeService) { }

ngOnInit(): void {
  this.cerateRegisrationForm();
  }

  cerateRegisrationForm(){
    this.myFormRegistration = this._fb.group({
      'firstName': ['',[Validators.required]],
      'lastName': ['',[Validators.required]],
      'email': ['',[Validators.required,Validators.email,Validators.minLength,]],
      'age': ['',[Validators.required, this.ageRangeValidator]],
      'phone': ['',[Validators.required, this.customPhoneValidator]],
      'gender': ['Male',[Validators.required]],
      'city': ['Pune',[Validators.required]],
      'password': [null,[Validators.required]],
      'confirmPassword': [null,[Validators.required,Validators.minLength(8)]],
    },
    {
      validators:this.mustMatch('password', 'confirmPassword')
    }
    )
  }

  ageRangeValidator(control: any) {
    const age = parseInt(control.value);
    if (isNaN(age) || age < 17 || age > 20) {
      return { 'ageRange': true };
    }
    return null;
  }

  customPhoneValidator(control: any) {
    const phoneNumber: string = control.value.toString();
    console.log('Value as string:', phoneNumber.length);
    if (phoneNumber && phoneNumber.length > 10) {
      return { maxLength: true }; // Return an object with a validation error key
    }
    return null; // Return null if valid
  }


  mustMatch(controlName:string, matchingControlName:string):any {
    return (formGroup:FormGroup)=>{
     const control = formGroup.controls[controlName];
     const matchingControl = formGroup.controls[matchingControlName];
     if(matchingControl.errors && !matchingControl.errors ['mustMatch']){
       return
     }  
     if(control.value !==  matchingControl.value){
       matchingControl.setErrors({mustMatch:true})
     }
     else
     {
       matchingControl.setErrors(null);
     }
    }
   }

   onSubmit() {
    console.log(this.myFormRegistration);
    this._employee.saveEmployee(this.myFormRegistration.value).subscribe(res => {
      console.log(res);
      
    })
    
    }
}
