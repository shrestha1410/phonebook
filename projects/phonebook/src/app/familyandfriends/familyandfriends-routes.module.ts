
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamilyandfriendsComponent } from './familyandfriends.component';
import { AddNewContactComponent } from './add-new-contact/add-new-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { DeleteContactComponent } from './delete-contact/delete-contact.component';
import { GetListOfContactComponent } from './get-list-of-contact/get-list-of-contact.component';

export const routes: Routes = [
   { path:'',component:FamilyandfriendsComponent,
        children:[
          {path:'addNewContact',component:AddNewContactComponent},
          {path:'editContact/:id',component:EditContactComponent},
          {path:'deleteContact',component:DeleteContactComponent},
          {path:'getListOfContact',component:GetListOfContactComponent}
        ]
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FamilyandfriendsRoutesModule { }
