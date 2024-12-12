import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CocktailsService {

  private apiUrl = 'http://localhost:8080/api/public/house-cocktails';

  constructor(private http: HttpClient) { }

  getCocktails(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
