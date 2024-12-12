import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MocktailsService {

  private apiUrl = 'http://localhost:8080/api/public/mocktails';

  constructor(private http: HttpClient) { }

  getMocktails(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
