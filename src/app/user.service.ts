import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url=  'http://localhost:3000/user';
  constructor(private http:HttpClient) { }
  postUser(body:any){
    return this.http.post(this.url,body);
  }
}
