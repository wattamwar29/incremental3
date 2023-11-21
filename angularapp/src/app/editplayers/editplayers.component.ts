import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from '../models/player';
@Component({
  selector: 'app-editplayer',
  templateUrl: './editplayer.component.html',
  styleUrls: ['./editplayer.component.css']
})
export class EditplayerComponent implements OnInit {
  constructor(private as:AdminService, private route: Router, private ar: ActivatedRoute) { }
  playerdata: Player = {id:0,name:'',age:0,category:'',biddingprice:0, teamid:0}
  id:number
  ngOnInit(){
    const tid = this.ar.snapshot.paramMap.get('id')
    this.id = Number(tid)
    this.getPlayer(this.id)
  }
  getPlayer(id:number){
    this.as.getPlayer(id).subscribe((data:Player) => this.playerdata = data)
  }
  saveData(player:Player)
  {
    this.playerdata = player
    this.as.editPlayers(this.playerdata).subscribe(() => {
      alert("Record Edited")
      this.route.navigate(['/GetPlayer'])
    })
  }
}



// import { Component, OnInit } from '@angular/core';
// import { AdminService } from '../services/admin.service';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Player } from '../models/player';

// @Component({
//   selector: 'app-editplayers',
//   templateUrl: './editplayers.component.html',
//   styleUrls: ['./editplayers.component.css']
// })
// export class EditplayersComponent implements OnInit {
//   constructor(private as:AdminService,private route:Router,private ar: ActivatedRoute) { }
//   playerdata: Player={id:0,name:'',age:0,category:'',biddingprice:0,teamid:0}
//   id:number

//   ngOnInit() {
//     const tid=this.ar.snapshot.paramMap.get('id')
//     this.id=Number(tid)
//     this.getPlayers(this.id)
//   }
//  getMovie(id:number){
//     this.as.GetAllPlayers(id).subscribe((data:IMovie)=>this.moviedata=data)
//   }
//   saveData(movie:IMovie)
//   {
//     this.moviedata=movie
//     this.ms.editMovie(this.moviedata).subscribe(()=>{
//       alert("Record Edited")
//       this.route.navigate(['/listmovies'])
//     })
//   }
//   constructor() { }

//   ngOnInit(): void {
//   }

// }
