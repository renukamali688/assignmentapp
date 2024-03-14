import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


myResistrationForm!:FormGroup;

defaultName:string='Renuka Malangner';
ImgUrl:string="../assets/images/RenuImg.jpeg";


countryes=['India','USA','Uk']
defaultCountry:string='India';

genders=['Male','female','other'];
// defaultGender:string='male';

phoneForm!: FormGroup;
countries = [
  { name: 'USA', code: '+1 '},
  { name: 'UK', code: '+44' },
  { name: 'India', code: '+91' },
  // Add more countries as needed
];



constructor(private fb: FormBuilder) {
this.createResistrationForm();
}
  ngOnInit(): void {
  }

  createResistrationForm(){
    this.myResistrationForm= this.fb.group({
      'fullName': new FormControl('Renuka Dnyaneshwar Malangner',Validators.required),
      'birthdate': new FormControl(),
      'gender': new FormControl('Male'),
      'countryCode': new FormControl('+91'),
      'phoneNumber': new FormControl('India',Validators.required),
      'bio': new FormControl(null,Validators.maxLength(256)),
      'userName': new FormControl('',[Validators.required,Validators.minLength(6)]),
      'email': new FormControl('',[Validators.required,Validators.minLength(19),Validators.maxLength(35),Validators.email]),
      'password': new FormControl(null,[Validators.required,Validators.minLength(8)]),
      'confirmpassword': new FormControl(null,[Validators.required,Validators.minLength(8)]),
    },
    {
      validators:this.mustMatch('password', 'confirmpassword')
    }
    )
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

  onCountryCodeChange(event: Event) {
    const countryCodeControl = this.myResistrationForm.get('countryCode');
    if (countryCodeControl) {
      countryCodeControl.setValue((event.target as HTMLInputElement).value);
    }
  }

  onCountry( event:any) {
   console.log(event.target.value);
   
    }

  onSubmit() {
   console.log(this.myResistrationForm);
   
    }
}
