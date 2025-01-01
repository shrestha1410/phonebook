import { FamilyandfriendsService } from './familyandfriends.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-familyandfriends',
  imports: [],
  templateUrl: './familyandfriends.component.html',
  styleUrl: './familyandfriends.component.scss'
})
export class FamilyandfriendsComponent implements OnInit{
  constructor( private router:Router,private familyandfriendsService:FamilyandfriendsService){}
  ngOnInit(): void {
    const id=0;
    const response=[
      {
        id:'',
        name:'',
        mobileNumber:''
      }
    ]
    this.familyandfriendsService.getList(id).subscribe(response=>{
      console.log('response',response);
    });
  }
  addNewContact(){
   this.router.navigate(['/familyandfriends/addNewContact']);
    }
  editContact(){
  this.router.navigate(['/familyandfriends/editContact']);
  }
  deleteContact(){
  this.router.navigate(['/familtandfriends/deleteContact']);
  }

}
