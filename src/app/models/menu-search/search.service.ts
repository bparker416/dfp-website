import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private  apiUrl = 'https://dfp-backend-iz97.onrender.com/api/public/search';

  constructor(private http: HttpClient) { }

  // Unified search for all food/drink menu items
  searchMenuItems(name: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/search?name=${name}`);
  }
}
