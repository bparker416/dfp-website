import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VeggieService {

  private apiUrl = "http://localhost:8080/api/veggie";

  constructor(private http: HttpClient) { }

  getVeggies(): Observable<any[]> {
    return this.http.get(this.apiUrl);
  }
}
