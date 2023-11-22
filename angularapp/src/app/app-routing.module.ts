import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetplayersComponent } from './getplayers/getplayers.component';
import { AddplayersComponent } from './addplayers/addplayers.component';
import { FindplayersComponent } from './findplayers/findplayers.component';
import { EditplayersComponent } from './editplayers/editplayers.component';
import { DeleteplayersComponent } from './deleteplayers/deleteplayers.component';

const routes: Routes = [
  {path:'getplayers',component:GetplayersComponent},
  {path:'addplayers',component:AddplayersComponent},
  {path:'findplayers',component:FindplayersComponent},
  {path:'editplayers',component:EditplayersComponent},
  {path:'deleteplayers',component:DeleteplayersComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
