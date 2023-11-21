import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetplayersComponent } from './getplayers/getplayers.component';
import { AddplayersComponent } from './addplayers/addplayers.component';

const routes: Routes = [
  {path:'getplayers',component:GetplayersComponent},
  {path:'addplayers',component:AddplayersComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
