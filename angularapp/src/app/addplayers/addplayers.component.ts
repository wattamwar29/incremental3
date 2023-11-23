import { Component, OnInit } from '@angular/core';
import { Player } from '../../models/player.model';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addplayers',
  templateUrl: './addplayers.component.html',
  styleUrls: ['./addplayers.component.css']
})
export class AddplayersComponent implements OnInit {
  playerdata:Player={id:0,name:'',age:0,category:'',biddingprice:0,teamid:0}

  constructor(private as:AdminService,private route:Router) { }
  saveData(player:Player):void{
    this.playerdata=player
    this.as.addPlayers(this.playerdata).subscribe(
      ()=>{
        alert('Record Added Successfully')
        this.route.navigate(['/GetPlayers'])
      }
    )
  }

  ngOnInit(): void {
  }

}
