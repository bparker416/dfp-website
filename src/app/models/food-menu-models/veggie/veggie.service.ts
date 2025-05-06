import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {Veggie} from "./veggie";
import {environment} from "../../../../environment/environment.development";

@Injectable({
  providedIn: 'root'
})
export class VeggieService {

  private apiUrl = `${environment.apiUrl}/public/veggie`;

  constructor(private http: HttpClient) { }

  getVeggies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/all`);
  }

  getActiveVeggies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/active`);
  }

  getVeggiesById(id: number): Observable<Veggie> {
    return this.http.get<Veggie>(`${this.apiUrl}/${id}`);
  }

  createVeggie(veggie: Veggie): Observable<Veggie> {
    return this.http.post<Veggie>(this.apiUrl, veggie);
  }

  updateVeggie(id: number, veggie: Veggie): Observable<Veggie> {
    return this.http.put<Veggie>(`${this.apiUrl}/${id}`, veggie);
  }

  deleteVeggie(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  toggleVeggieActive(id: number): Observable<Veggie> {
    return this.http.put<Veggie>(`${this.apiUrl}/${id}/toggle`, {});
  }
}
