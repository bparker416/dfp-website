import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private  apiUrl = 'damn-fine-backend-afbfc8gqe6e6cmh0.westus-01.azurewebsites.net/api/public/search';

  constructor(private http: HttpClient) { }

  // Unified search for all food/drink menu items
  searchMenuItems(name: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/search?name=${name}`);
  }
}
