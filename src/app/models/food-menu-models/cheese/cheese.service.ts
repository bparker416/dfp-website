import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CheeseService {

  private apiUrlRegular = "http://localhost:8080/api/public/cheese/price-is-regular";
  private apiUrlOne = "http://localhost:8080/api/public/cheese/price-is-one";
  private apiUrlTwo = "http://localhost:8080/api/public/cheese/price-is-two";

  constructor(private http: HttpClient) {}

  cheesePriceIsRegular(): Observable<any> {
    return this.http.get(this.apiUrlRegular);
  }

  cheesePriceIsOne(): Observable<any> {
    return this.http.get(this.apiUrlOne);
  }

  cheesePriceIsTwo(): Observable<any> {
    return this.http.get(this.apiUrlTwo);
  }

}
