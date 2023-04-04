import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class MobileService {

  constructor(private http:HttpClient) { }
  
  url = "http://localhost:3000/posts"

  fetchMobiles(){
    return this.http.get(this.url)
  }

  deleteMobile(Id:number){
    return this.http.delete(this.url+"/"+Id)
  }

  postMobile(body:any){
    return this.http.post(this.url,body)
  }

  putMobile(body:any,i:any){
    return this.http.put(this.url+'/'+i,body)
  }

  


}
