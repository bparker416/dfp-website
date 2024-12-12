import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SideService {

  private apiUrl = 'http://localhost:8080/api/public/side';

  constructor(private http: HttpClient) {}

  getSides(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
