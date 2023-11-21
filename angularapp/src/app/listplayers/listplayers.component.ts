import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { IPlayer } from '../models/iplayer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-listplayers',
  templateUrl: './listplayers.component.html',
  styleUrls: ['./listplayers.component.css']
})
export class ListplayersComponent implements OnInit {


  playerdata: any[] = []
 
  constructor(private ps:AdminService) {
    this.ps.getAllPlayers().subscribe(data=>{this.playerdata.push(...data)})
    console.log(this.playerdata);
  }
 
  ngOnInit(): void {
  }
 
}