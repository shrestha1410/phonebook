import { LogoutService } from './logout.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent {
 constructor(private logoutService:LogoutService){}
 logout(){
  this.logoutService.logoutSession();
 }
}
