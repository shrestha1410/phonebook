import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { FamilyandfriendsComponent } from './familyandfriends/familyandfriends.component';
import { PlansComponent } from './plans/plans.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register',component:RegisterComponent},
    { path: 'familyandfriends',component:FamilyandfriendsComponent},
    { path: 'plan',component:PlansComponent},
    { path: 'logout',component:LogoutComponent},
    { path: 'profile',component:ProfileComponent},
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
