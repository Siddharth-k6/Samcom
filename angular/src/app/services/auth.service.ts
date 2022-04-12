import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { loginUrl } from '../config/api';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getuser(): Observable<any[]> {    
    return this.http.get<any[]>(loginUrl);
  }
}
