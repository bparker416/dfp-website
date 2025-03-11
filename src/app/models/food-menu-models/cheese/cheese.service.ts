import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {Drinks} from "../../drink-menu-models/drinks/drinks";
import {Cheese} from "./cheese";

@Injectable({
  providedIn: 'root'
})
export class CheeseService {

  private apiUrl = "https://dfp-backend-iz97.onrender.com/api/public/cheese";
  private apiUrlRegular = "https://dfp-backend-iz97.onrender.com/api/public/cheese/price-is-regular";
  private apiUrlOne = "https://dfp-backend-iz97.onrender.com/api/public/cheese/price-is-one";
  private apiUrlTwo = "https://dfp-backend-iz97.onrender.com/api/public/cheese/price-is-two";

  constructor(private http: HttpClient) {}

  getAllCheese(): Observable<any> {
    return this.http.get(`${this.apiUrl}/all`);
  }

  getActiveCheese(): Observable<any> {
    return this.http.get(`${this.apiUrl}/active`);
  }

  cheesePriceIsRegular(): Observable<any> {
    return this.http.get(this.apiUrlRegular);
  }

  cheesePriceIsOne(): Observable<any> {
    return this.http.get(this.apiUrlOne);
  }

  cheesePriceIsTwo(): Observable<any> {
    return this.http.get(this.apiUrlTwo);
  }

  getCheeseById(id: number): Observable<Cheese> {
    return this.http.get<Cheese>(`${this.apiUrl}/${id}`);
  }

  createCheese(cheese: Cheese): Observable<Cheese> {
    return this.http.post<Cheese>(this.apiUrl, cheese);
  }

  updateCheese(id: number, cheese: Cheese): Observable<Cheese> {
    return this.http.put<Cheese>(`${this.apiUrl}/${id}`, cheese);
  }

  deleteCheese(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  toggleCheeseActive(id: number): Observable<Cheese> {
    return this.http.put<Cheese>(`${this.apiUrl}/${id}/toggle`, {});
  }
}
