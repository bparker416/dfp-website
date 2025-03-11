import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {Mocktails} from "./mocktails";

@Injectable({
  providedIn: 'root'
})
export class MocktailsService {

  private apiUrl = 'https://dfp-backend-iz97.onrender.com/api/public/mocktails';

  constructor(private http: HttpClient) { }

  getMocktails(): Observable<any> {
    return this.http.get(`${this.apiUrl}/all`);
  }

  getActiveMocktails(): Observable<any> {
    return this.http.get(`${this.apiUrl}/active`);
  }

  getMocktailsById(id: number): Observable<Mocktails> {
    return this.http.get<Mocktails>(`${this.apiUrl}/${id}`);
  }

  createMocktail(mocktails: Mocktails): Observable<Mocktails> {
    return this.http.post<Mocktails>(this.apiUrl, mocktails);
  }

  updateMocktail(id: number, mocktails: Mocktails): Observable<Mocktails> {
    return this.http.put<Mocktails>(`${this.apiUrl}/${id}`, mocktails);
  }

  deleteMocktail(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  toggleMocktailActive(id: number): Observable<Mocktails> {
    return this.http.put<Mocktails>(`${this.apiUrl}/${id}/toggle`, {});
  }

}
