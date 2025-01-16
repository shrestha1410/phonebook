import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,MatMenuModule,MatButtonModule,MatListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private http:HttpClient,private route:Router){}
  title = 'Phonebook';
  logout() {
  this. route.navigateByUrl("/logout")
  }
  goToProfile(){
   this.route.navigateByUrl("/")
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

}
