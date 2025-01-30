import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,MatMenuModule,MatButtonModule,MatListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private route:Router){}
  title = 'Phonebook';
  logout() {
    this.route.navigateByUrl("/logout")
  }
  logIn() {
    this.route.navigateByUrl("/login")
    }
  goToProfile(){
   this.route.navigateByUrl("/profile")
  }
  getAllPlans(){
    this.route.navigateByUrl("/plan")
  }
  listAllContacts(){
    this.route.navigateByUrl('/familyandfriends/getListOfContact')
  }
  addNewContact(){
    this.route.navigateByUrl("/familyandfriends/addNewContact")
  }
  goToProfileOrLogin(){
    this.route.navigateByUrl("/profile")
  }
}
