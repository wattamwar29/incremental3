import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { IPlayer } from '../models/iplayer';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-findplayer',
  templateUrl: './findplayer.component.html',
  styleUrls: ['./findplayer.component.css']
})
export class FindplayerComponent implements OnInit {

  constructor(private ps: AdminService,private ar: ActivatedRoute) { }
  playerdata: IPlayer
  id:number

  ngOnInit() {
    const tid=this.ar.snapshot.paramMap.get('id')
    this.id=Number(tid)
    this.ps.getPlayer(this.id).subscribe((data:IPlayer)=>{
    this.playerdata=data
    })
  }

}
