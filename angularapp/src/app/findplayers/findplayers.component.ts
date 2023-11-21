import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { ActivatedRoute } from '@angular/router';
import { Player } from '../models/player';

@Component({
  selector: 'app-findplayers',
  templateUrl: './findplayers.component.html',
  styleUrls: ['./findplayers.component.css']
})
export class FindplayersComponent implements OnInit {

  constructor(private as: AdminService,private ar: ActivatedRoute) { }
  playerdata: Player
  id:number

  ngOnInit() {
    const tid=this.ar.snapshot.paramMap.get('id')
    this.id=Number(tid)
    this.as.getPlayer(this.id).subscribe((data:Player)=>{
      this.playerdata=data
    })
  }

}

