import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { ActionResult } from 'puppeteer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-findteam',
  templateUrl: './findteam.component.html',
  styleUrls: ['./findteam.component.css']
})
export class FindteamComponent implements OnInit {

  constructor(private as:AdminService,private ar: ActionResult, private router:Router) { }

  ngOnInit(): void {
  }

}
// constructor(private as: AdminService,private ar: ActivatedRoute, private router:Router) { }
//   playerdata: Player
//   id:number

//   ngOnInit() {
//     const tid=this.ar.snapshot.paramMap.get('id')
//     this.id=Number(tid)
//     this.as.getPlayer(this.id).subscribe((data:Player)=>{
//       this.playerdata=data
//     })
//   }

//     Show()
// {
//    this.router.navigate(['/getplayers'])
// }
// }
