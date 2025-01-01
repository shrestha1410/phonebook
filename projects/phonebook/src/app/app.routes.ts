import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { FamilyandfriendsComponent } from './familyandfriends/familyandfriends.component';
import { AddNewContactComponent } from './familyandfriends/add-new-contact/add-new-contact.component';
import { EditContactComponent } from './familyandfriends/edit-contact/edit-contact.component';
import { DeleteContactComponent } from './familyandfriends/delete-contact/delete-contact.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path:'register',component:RegisterComponent},
    { path:'familyandfriends',component:FamilyandfriendsComponent,
      children:[
        {path:'addnewcontact',component:AddNewContactComponent},
        {path:'editContact',component:EditContactComponent},
        {path:'deleteContact',component:DeleteContactComponent}
      ]
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
