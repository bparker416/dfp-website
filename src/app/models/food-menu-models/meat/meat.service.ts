import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Drinks} from "../../drink-menu-models/drinks/drinks";
import {Meat} from "./meat";

@Injectable({
  providedIn: 'root'
})
export class MeatService {

  private apiUrl = 'http://localhost:8080/api/public/meats';
  private apiUrlThree = "http://localhost:8080/api/public/meat/price-is-three";
  private apiUrlFour = "http://localhost:8080/api/public/meat/price-is-four";

  constructor(private http: HttpClient) {}

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
