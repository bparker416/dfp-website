import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {Drinks} from "../drinks/drinks";
import {Cocktails} from "./cocktails";

@Injectable({
  providedIn: 'root'
})
export class CocktailsService {

  private apiUrl = 'https://dfp-backend-iz97.onrender.com/api/public/house-cocktails';

  constructor(private http: HttpClient) { }

  getCocktails(): Observable<any> {
    return this.http.get(`${this.apiUrl}/all`);
  }

  getActiveCocktails(): Observable<any> {
    return this.http.get(`${this.apiUrl}/active`);
  }

  getCocktailsById(id: number): Observable<Cocktails> {
    return this.http.get<Cocktails>(`${this.apiUrl}/${id}`);
  }

  createCocktail(cocktail: Cocktails): Observable<Cocktails> {
    return this.http.post<Cocktails>(this.apiUrl, cocktail);
  }

  updateCocktail(id: number, cocktail: Cocktails): Observable<Cocktails> {
    return this.http.put<Cocktails>(`${this.apiUrl}/${id}`, cocktail);
  }

  deleteCocktail(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  toggleCocktailActive(id: number): Observable<Cocktails> {
    return this.http.put<Cocktails>(`${this.apiUrl}/${id}/toggle`, {});
  }
}
