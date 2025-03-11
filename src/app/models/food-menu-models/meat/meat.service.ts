import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {Drinks} from "../../drink-menu-models/drinks/drinks";
import {Meat} from "./meat";

@Injectable({
  providedIn: 'root'
})
export class MeatService {

  private apiUrl = 'https://dfp-backend-iz97.onrender.com/api/public/meat';
  private apiUrlThree = "https://dfp-backend-iz97.onrender.com/api/public/meat/price-is-three";
  private apiUrlFour = "https://dfp-backend-iz97.onrender.com/api/public/meat/price-is-four";

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
