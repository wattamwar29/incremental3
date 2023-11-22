import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetplayersComponent } from './getplayers/getplayers.component';
import { AddplayersComponent } from './addplayers/addplayers.component';
import { FindplayersComponent } from './findplayers/findplayers.component';
import { EditplayersComponent } from './editplayers/editplayers.component';
import { DeleteplayersComponent } from './deleteplayers/deleteplayers.component';
import { AddteamComponent } from './addteam/addteam.component';
import { FindteamComponent } from './findteam/findteam.component';

const routes: Routes = [
  {path:'getplayers',component:GetplayersComponent},
  {path:'addplayers',component:AddplayersComponent},
  {path:'GetPlayer/:id',component:FindplayersComponent},
  {path:'editplayers/:id',component:EditplayersComponent},
  {path:'deleteplayers/:id',component:DeleteplayersComponent},
  {path:'AddTeam',component:AddteamComponent},
  {path:'FindTeam',component:FindteamComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
