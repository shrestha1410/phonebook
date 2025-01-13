import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddNewContactService } from './add-new-contact.service';
import { FormsModule } from '@angular/forms';
import { NewContact } from './NewContact';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-new-contact',
  imports: [FormsModule,MatButtonModule],
  templateUrl: './add-new-contact.component.html',
  styleUrl: './add-new-contact.component.scss'
})
export class AddNewContactComponent {
  firstName: string = '';
  lastName: string = '';
  password: string = '';
  mobileNumber: number = 0;
  addressLine1: string = '';
  addressLine2: string = '';

  constructor(private router:Router,private addNewContactService:AddNewContactService){}
  saveNewContact(){
    const newContact:NewContact={
      firstName: this.firstName,
      lastName: this.lastName,
      mobileNumber: this.mobileNumber,
      addressLine1: this.addressLine1,
      addressLine2: this.addressLine2
    }
  this.addNewContactService.saveNewContact(newContact).subscribe((response)=>{
    console.log(response);
    alert.apply("Contact saved successfully");
    this.router.navigate(["/familyandfriends/getListOfContact"])
  })
  }

  navigateToLIst(){
  this.router.navigate(["/familyandfriends/getListOfContact"])
  }
}
