import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListplayersComponent } from './listplayers/listplayers.component';
import { FindplayerComponent } from './findplayer/findplayer.component';
const routes: Routes = [
  {path:'listplayers',component:ListplayersComponent},
  {path:'findplayer',component:FindplayerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
