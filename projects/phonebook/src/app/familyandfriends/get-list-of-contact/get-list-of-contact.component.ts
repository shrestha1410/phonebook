import { CommonModule } from '@angular/common';
import { GetListOfContactService } from './get-list-of-contact.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-get-list-of-contact',
  imports: [CommonModule,MatButtonModule ],
  templateUrl: './get-list-of-contact.component.html',
  styleUrl: './get-list-of-contact.component.scss'
})
export class GetListOfContactComponent {
  constructor( private router:Router,private getListOfContactService:GetListOfContactService){}
  userContactId:number=0;
  list: any = [
    {
      id: '',
      name: '',
      mobileNumber: ''
    }
  ];
  ngOnInit(): void {
      this.getListOfContactService.getidByMobileNumber().subscribe((response) => {
        localStorage.setItem('id', response.id.toString());
        console.log('User details:', response);

    this.getListOfContactService.getList().subscribe((response: any)=>{
      console.log('response',response);
      this.list=response;
    });
  });
}
  addNewContact(){
    this.router.navigate(['/familyandfriends/addNewContact']);
     }
   editContact(item:any){
   this.router.navigate(['/familyandfriends/editContact',item.id]);
   }
   deleteContact(){
   this.router.navigate(['/familyandfriends/deleteContact']);
   }
   getListOfContact(){
     this.router.navigate(['/familyandfriends/getListOfContact']);
   }
  }
