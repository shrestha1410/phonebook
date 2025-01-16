import { Plans } from './../plans/Plans';
import { ProfileService } from './profile.service';
import { Component, OnInit } from '@angular/core';
import { ProfileResponse } from './ProfileResponse';
import { response } from 'express';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{
 constructor(private profileService:ProfileService){}
  list:ProfileResponse={
  plans:{
    id: 0,
    planName: '',
    amount: 0,
    Subscription: false
  } ,
  user:{
    id: 0,
    firstName: '',
    lastName: '',
    mobileNumber: 0,
    addressLine1: '',
    addressLine2: ''
  },
  familyAndFriends :[
    {
      id: 0,
      firstName: '',
      lastName: '',
      mobileNumber: 0,
      addressLine1: '',
      addressLine2: ''
    }
  ]
}
  ngOnInit(): void {

   this.profileService.getProfile().subscribe((response)=>{
    console.log(response);
    this.list=response;
   });
  }

}
