import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';
import { Team } from 'src/models/team.model';

@Component({
  selector: 'app-addteam',
  templateUrl: './addteam.component.html',
  styleUrls: ['./addteam.component.css']
})
export class AddteamComponent implements OnInit {
  teamdata:Team={id:0,name:'',maximumBudget:0}
  constructor(private as:AdminService,private route:Router) { }
  saveData(team:Team):void{
 
    this.teamdata=team
    this.as.addTeam(this.teamdata).subscribe(
      ()=>{
        alert('Record added sucessfully')
        this.route.navigate(['/GetTeam'])
      }
    )
  }

  ngOnInit(): void {
  }

}

 

