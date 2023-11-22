import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { ActionResult } from 'puppeteer';
import { ActivatedRoute, Router } from '@angular/router';
import { Team } from '../models/team';

@Component({
  selector: 'app-findteam',
  templateUrl: './findteam.component.html',
  styleUrls: ['./findteam.component.css']
})
export class FindteamComponent implements OnInit {

  constructor(private as:AdminService,private ar: ActivatedRoute, private route:Router) { }
  teamdata: Team

  ngOnInit(): void {
    const tid = this.ar.snapshot.paramMap.get('id')
    this.teamId=Number(tid)
    this.as.getTeam(this.teamId).subscribe((data:Team)=>{
      this.teamdata=data
    })
  }
  Show()
  {
    this.route.navigate(['/GetTeam'])
  }

}
 