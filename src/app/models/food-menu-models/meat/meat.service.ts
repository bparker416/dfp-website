import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {Drinks} from "../../drink-menu-models/drinks/drinks";
import {Meat} from "./meat";
import {environment} from "../../../../environment/environment.development";

@Injectable({
  providedIn: 'root'
})
export class MeatService {

  private apiUrl = `${environment.apiUrl}/public/meat`;
  private apiUrlThree = `${environment.apiUrl}/public/meat/price-is-three`;
  private apiUrlFour = `${environment.apiUrl}/public/meat/price-is-four`;

  constructor(private http: HttpClient) {}

  getAllMeat(): Observable<any> {
    return this.http.get(`${this.apiUrl}/all`);
  }

  getActiveMeat(): Observable<any> {
    return this.http.get(`${this.apiUrl}/active`);
  }

  meatPriceByThree(): Observable<any> {
    return this.http.get(this.apiUrlThree);
  }

  meatPriceByFour(): Observable<any> {
    return this.http.get(this.apiUrlFour);
  }

  getMeatsById(id: number): Observable<Meat> {
    return this.http.get<Meat>(`${this.apiUrl}/${id}`);
  }

  createMeat(meat: Meat): Observable<Meat> {
    return this.http.post<Meat>(this.apiUrl, meat);
  }

  updateMeat(id: number, meat: Meat): Observable<Meat> {
    return this.http.put<Meat>(`${this.apiUrl}/${id}`, meat);
  }

  deleteMeat(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  toggleMeatActive(id: number): Observable<Meat> {
    return this.http.put<Meat>(`${this.apiUrl}/${id}/toggle`, {});
  }
}
