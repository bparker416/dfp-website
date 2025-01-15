import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private  apiUrl = 'http://localhost:8080/api/public/search';

  constructor(private http: HttpClient) { }

  // Unified search for all food/drink menu items
  searchMenuItems(name: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/search?name=${name}`);
  }
}
