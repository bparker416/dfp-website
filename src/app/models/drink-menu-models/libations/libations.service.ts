import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LibationsService {

  private apiUrl = 'http://localhost:8080/api/seasonal-libations';

  constructor(private http: HttpClient) { }

  getLibations(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
