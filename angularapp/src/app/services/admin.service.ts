import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from '../models/player';
import {HttpErrorResponse,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private url= "https://8080-bddcbabdfeddbfacbbecabcdadeafbbdcaeafe.premiumproject.examly.io/Admin";
 
  constructor(private httpclient: HttpClient) { }
 
  GetAllPlayers():Observable<any[]>
  {
    return this.httpclient.get<any[]>(this.url + '/GetPlayer');
  }
  httpOptions={headers:new HttpHeaders({'Content-type':'application/json'})}
  addPlayers(playerdata:Player):Observable<Player>{
    return this.httpclient.post<Player>(this.url+'/AddPlayer',playerdata,this.httpOptions)
  }
  editPlayers(playerdata:Player):Observable<Player>{
    return this.httpclient.put<Player>(this.url +'/EditPlayer/'+playerdata.id,playerdata,this.httpOptions)
  }
  getPlayer(id:number):Observable<Player>
  {
    return this.httpclient.get<Player>(this.url+'/GetPlayer{id}')
  }
  deletePlayer(id:number):Observable<Player>
  {
    return this.httpclient.delete<Player>(this.url + '/DeletePlayer/' + id)
  }

}
