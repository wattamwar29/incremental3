import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListplayersComponent } from './listplayers/listplayers.component';

const routes: Routes = [
  {path:'listplayers',component:ListplayersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
