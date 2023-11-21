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
}
