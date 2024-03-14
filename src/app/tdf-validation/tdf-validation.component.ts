import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-tdf-validation',
  templateUrl: './tdf-validation.component.html',
  styleUrls: ['./tdf-validation.component.css']
})
export class TdfValidationComponent implements OnInit {

 isubmitted:boolean=false;

  defaultCourse:string='JavaScript';

  defaultGender: string = 'Female';
  genders = [
    {
      id: '1',
      value: 'Male'
    },

    {
      id: '2',
      value: 'Female'
    }
  ]

  employee = new Employee();

  
  // myForms!:NgForm;
  // empyees={
  //   course: "Angular",
  //   gender: "Female"

  // }

  constructor() {}

  ngOnInit(): void {
  //  
  //   this.myForms = this.formBuilder.group({
  //    course: '',
  //    gender: ''
  //  });

  //  this.myForms.patchValue({
  //    course: 'HTML',
  //    gender: 'Female'
  //  });
  }

  OnSubmit(myForm: NgForm) {
  console.log('Form Submitted: ',myForm);
     this.isubmitted=false;
  this.employee.username=myForm.value.userDetails.username;
  this.employee.email=myForm.value.userDetails.email;
  this.employee.course=myForm.value.course;
  this.employee.gender=myForm.value.gender;
 
    }
    onReset(myform: NgForm) {
      myform.reset();
      this.isubmitted=true;

     myform.controls['course'].patchValue('Angular');
     myform.controls['gender'].setValue('Female');
      }
  }
