import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Team } from '../models/team';

@Component({
  selector: 'app-getteam',
  templateUrl: './getteam.component.html',
  styleUrls: ['./getteam.component.css']
})
export class GetteamComponent implements OnInit {
  teamdata: Team[]=[]
 
  constructor(private as:AdminService) { 
    this.as.getTeam().subscribe(data =>{this.teamdata.push(...data)})
    console.log(this.teamdata)
     }
  

  ngOnInit(): void {
  }

}
