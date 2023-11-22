import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetplayersComponent } from './getplayers/getplayers.component';
import { AddplayersComponent } from './addplayers/addplayers.component';
import { FindplayersComponent } from './findplayers/findplayers.component';
import { EditplayersComponent } from './editplayers/editplayers.component';
import { DeleteplayersComponent } from './deleteplayers/deleteplayers.component';
import { AddteamComponent } from './addteam/addteam.component';
import { EditteamComponent } from './editteam/editteam.component';
import { DeleteteamComponent } from './deleteteam/deleteteam.component';
import { GetteamComponent } from './getteam/getteam.component';


const routes: Routes = [
  {path:'getplayers',component:GetplayersComponent},
  {path:'addplayers',component:AddplayersComponent},
  {path:'GetPlayer/:id',component:FindplayersComponent},
  {path:'editplayers/:id',component:EditplayersComponent},
  {path:'deleteplayers/:id',component:DeleteplayersComponent},
  {path:'AddTeam',component:AddteamComponent},
  {path:'EditTeam/:id',component:EditteamComponent},
  {path:'DeleteTeam/:id',component:DeleteteamComponent},
  {path:'GetTeam',component:GetteamComponent}
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
