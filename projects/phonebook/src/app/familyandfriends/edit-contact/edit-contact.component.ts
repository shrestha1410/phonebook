import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { EditContactService } from './edit-contact.service';
import { NewContact } from '../add-new-contact/NewContact';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-edit-contact',
  imports: [FormsModule,MatButtonModule],
  templateUrl: './edit-contact.component.html',
  styleUrl: './edit-contact.component.scss'
})
export class EditContactComponent implements OnInit{
 constructor(private router:ActivatedRoute,
  private routes:Router,private editContactService:EditContactService){}
  existingContact:NewContact=
  {
    firstName: '',
    lastName: '',
    mobileNumber: 0,
    addressLine1: '',
    addressLine2: ''
  };
 ngOnInit(): void {
  const id=this.router.snapshot.params['id'];
     this.editContactService.getContactDetailsById(id).subscribe((response:NewContact)=>{
      console.log(response);
      this.existingContact=response;
     })
 }
 updateContact(){
  const id=this.router.snapshot.params['id'];
 this.editContactService.updateContact(this.existingContact,id).subscribe((response)=>{
  console.log(response);
  alert("contact updated successfully");
  this.routes.navigate(['/familyandfriends/getListOfContact']);
 })
 }
 navigateToList(){
  this.routes.navigate(['/familyandfriends/getListOfContact']);
 }
}
