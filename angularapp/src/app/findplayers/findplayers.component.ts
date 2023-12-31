import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from 'src/models/player.model';

@Component({
  selector: 'app-findplayers',
  templateUrl: './findplayers.component.html',
  styleUrls: ['./findplayers.component.css']
})
export class FindplayersComponent implements OnInit {

  constructor(private as: AdminService,private ar: ActivatedRoute, private route:Router) { }
  playerdata: Player
  id:number

  ngOnInit() {
    const tid=this.ar.snapshot.paramMap.get('id')
    this.id=Number(tid)
    this.as.getPlayers(this.id).subscribe((data:Player)=>{
      this.playerdata=data
    })
  }

    Show()
{
   this.route.navigate(['/getplayers'])
}
}


