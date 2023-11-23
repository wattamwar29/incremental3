import { Component, OnInit } from '@angular/core';
import { Team } from '../models/team';
import { AdminService } from '../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editteam',
  templateUrl: './editteam.component.html',
  styleUrls: ['./editteam.component.css']
})
export class EditteamComponent implements OnInit {
  teamdata:Team={teamId:0,teamName:''}
  id:number
 

  constructor(private as:AdminService, private route: Router, private ar: ActivatedRoute) { }

  ngOnInit(): void {
    const tid=this.ar.snapshot.paramMap.get('id')
    this.id=Number(tid)
    this.getteam(this.id)
  }
  getteam(id:number)
  {
    this.as.findTeam(id).subscribe((data:Team)=> this.teamdata=data)
  }
 
  saveData(team:Team)
  {
    this.teamdata=team
    this.as.editTeam(this.teamdata).subscribe(()=>{
      alert("Record Edited")
      this.route.navigate(['/GetTeam'])
    })
  }

}


   
 
  
 
