import { Component, OnInit } from '@angular/core';
import { PlansService } from './plans.service';
import { Plans } from './Plans';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-plans',
  imports: [MatButtonModule,CommonModule],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.scss'
})
export class PlansComponent implements OnInit{
constructor(private planService:PlansService){}
 list:any=[{
   id: 0,
   planName: '',
   amount: 0,
   Subscription: false
 }];
  ngOnInit(): void {
   this.planService.getAllPlans().subscribe((response)=>{
    console.log(response);
    this.list=response;
   });
  }

  loginUserIs:string[]= JSON.parse(localStorage.getItem('loginUserIs') || '[]');
  showPlan(item:Plans){

  }
  addPlan(){

  }
   editPlan(){

   }
}
