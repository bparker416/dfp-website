import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Drinks} from "../../drink-menu-models/drinks/drinks";
import {Side} from "./side";

@Injectable({
  providedIn: 'root'
})
export class SideService {

  private apiUrl = 'http://localhost:8080/api/public/side';

  constructor(private http: HttpClient) {}

  getSides(): Observable<any> {
    return this.http.get(`${this.apiUrl}/all`);
  }

  getActiveSides(): Observable<any> {
    return this.http.get(`${this.apiUrl}/active`);
  }

  getSidesById(id: number): Observable<Side> {
    return this.http.get<Side>(`${this.apiUrl}/${id}`);
  }

  createSide(side: Side): Observable<Side> {
    return this.http.post<Side>(this.apiUrl, side);
  }

  updateSide(id: number, side: Side): Observable<Side> {
    return this.http.put<Side>(`${this.apiUrl}/${id}`, side);
  }

  deleteSide(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  toggleSideActive(id: number): Observable<Side> {
    return this.http.put<Side>(`${this.apiUrl}/${id}/toggle`, {});
  }
}
