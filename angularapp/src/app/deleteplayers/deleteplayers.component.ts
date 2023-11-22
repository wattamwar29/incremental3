import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Player } from '../models/player';

@Component({
  selector: 'app-deleteplayers',
  templateUrl: './deleteplayers.component.html',
  styleUrls: ['./deleteplayers.component.css']
})
export class DeleteplayersComponent implements OnInit {

  constructor(private as:AdminService, private ar: ActivatedRoute, private route: Router) { }
  id : number
  playerdata : Player = {id:0,name:'',age:0,category:'',biddingprice:0, teamid:0}

  ngOnInit(): void {
    const tid = this.ar.snapshot.paramMap.get('id')
    this.id = Number(tid)
    this.getPlayer(this.id)
  }
  getPlayer(id : number) {
    this.as.getPlayer(id).subscribe((data : Player) =>
      this.playerdata = data
    )
  }
  saveData(player : Player) : void {
    this.playerdata = player
    this.as.deletePlayer(this.id).subscribe(() => {
      alert("Record Deleted")
      this.route.navigate(['/getplaters'])
    })

}
}