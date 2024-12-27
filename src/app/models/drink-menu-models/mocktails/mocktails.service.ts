import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Drinks} from "../drinks/drinks";
import {Mocktails} from "./mocktails";

@Injectable({
  providedIn: 'root'
})
export class MocktailsService {

  private apiUrl = 'http://localhost:8080/api/public/mocktails';

  constructor(private http: HttpClient) { }

  getMocktails(): Observable<any> {
    return this.http.get(this.apiUrl);
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
