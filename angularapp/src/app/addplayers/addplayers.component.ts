import { Component, OnInit } from '@angular/core';
import { Player } from '../models/player';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addplayers',
  templateUrl: './addplayers.component.html',
  styleUrls: ['./addplayers.component.css']
})
export class AddplayersComponent implements OnInit {
  playerdata:Player={id:0,name:'',age:0,catergory:'',biddingprice:0,teamid:0}

  constructor(private as:AdminService,private route:Router) { }
  saveData(player:Player):void{
    this.playerdata=player
    this.as.addMovie(this.moviedata).subscribe(
      ()=>{
        alert('Record Added Successfully')
        this.route.navigate(['/listmovies'])
      }
    )
  }

  ngOnInit(): void {
  }

}
