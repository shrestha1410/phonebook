import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
<<<<<<< HEAD
=======
import { NgModule } from '@angular/core';
>>>>>>> 7ee3d2526f078a412c9101c4b97bf8857f6b911a

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {path:'register',component:RegisterComponent},
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];
<<<<<<< HEAD
=======
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
>>>>>>> 7ee3d2526f078a412c9101c4b97bf8857f6b911a
