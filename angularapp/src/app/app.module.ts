import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { GetplayersComponent } from './getplayers/getplayers.component';
import { AddplayersComponent } from './addplayers/addplayers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FindplayersComponent } from './findplayers/findplayers.component';
import { EditplayersComponent } from './editplayers/editplayers.component';
import { DeleteplayersComponent } from './deleteplayers/deleteplayers.component';
import { AddteamComponent } from './addteam/addteam.component';
import { GetteamComponent } from './getteam/getteam.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EditteamComponent } from './editteam/editteam.component';
import { FindteamComponent } from './findteam/findteam.component';
import { DeleteteamComponent } from './deleteteam/deleteteam.component';
import { TeamslistComponent } from './teamslist/teamslist.component';




@NgModule({
  declarations: [
    AppComponent,
    GetplayersComponent,
    AddplayersComponent,
    FindplayersComponent,
    EditplayersComponent,
    DeleteplayersComponent,
    AddteamComponent,
    GetteamComponent,
    NavbarComponent,
    EditteamComponent,
    FindteamComponent,
    DeleteteamComponent,
    TeamslistComponent,

 

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
