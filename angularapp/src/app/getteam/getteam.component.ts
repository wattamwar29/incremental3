import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-getteam',
  templateUrl: './getteam.component.html',
  styleUrls: ['./getteam.component.css']
})
export class GetteamComponent implements OnInit {
  playerdata: any[]=[]
 
  constructor(private as:AdminService) { 
    this.as.getTeam().subscribe(data =>{this.teamdata.push(...data)})
    console.log(this.playerdata)
     }
  

  ngOnInit(): void {
  }

}
