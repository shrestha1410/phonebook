import { RouterOutlet } from '@angular/router';
import { LogoutService } from './logout.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  imports: [RouterOutlet],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent implements OnInit{
 constructor(private logoutService:LogoutService){}
  ngOnInit(): void {
    this.logoutService.logoutSession();
  }
}
