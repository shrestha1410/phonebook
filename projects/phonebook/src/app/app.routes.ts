import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { FamilyandfriendsComponent } from './familyandfriends/familyandfriends.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path:'register',component:RegisterComponent},
    { path:'familyandfriends',component:FamilyandfriendsComponent},
    { path: 'familyandfriends', loadChildren: () =>
       import('./familyandfriends/familyandfriends-routes.module')
       .then(m => m.FamilyandfriendsRoutesModule) },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
