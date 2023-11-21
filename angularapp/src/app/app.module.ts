import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
// import { AdminComponent } from './admin/admin.component';
// import { OrganizerComponent } from './organizer/organizer.component';
// import { RegistrationComponent } from './registration/registration.component';
// import { ErrorComponent } from './error/error.component';
import { ListplayersComponent } from './listplayers/listplayers.component';
// import { ListplayerComponent } from './listplayer/listplayer.component';
import { EditplayerComponent } from './editplayer/editplayer.component';
import { DeleteplayerComponent } from './deleteplayer/deleteplayer.component';
import { AddplayerComponent } from './addplayer/addplayer.component';
import { FindplayerComponent } from './findplayer/findplayer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    //HomeComponent,
    //AdminComponent,
    //OrganizerComponent,
    //RegistrationComponent,
    //ErrorComponent,
    ListplayersComponent,
    //ListplayerComponent,
    EditplayerComponent,
    DeleteplayerComponent,
    AddplayerComponent,
    FindplayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
