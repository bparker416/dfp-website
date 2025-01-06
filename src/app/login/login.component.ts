import { Component } from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {HttpClient, HttpClientModule, HttpHeaders, HttpParams} from "@angular/common/http";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule, CommonModule, HttpClientModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router, private http: HttpClient) {}

  onSubmit() {
    const body = {
      username: this.username,
      password: this.password
    };

      this.http.post('http://localhost:8080/api/public/auth/login', body, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
        withCredentials: true
      })
        .subscribe({
          next: () => {
            this.router.navigate(['/updates']).then(() => console.log('Successfully logged in'));
          },
          error: err => {
            if (err.status === 401) {
              this.errorMessage = 'Login info bad.'
            } else {
              this.errorMessage = 'Idk man';
            }
          }
        });
  }





  /*
  onSubmit() {
    this.authService.login(this.username, this.password).subscribe({
      next: () => {
        this.router.navigate(['/updates']);
      },
      error: (err) => {
        if (err.status === 401) {
          this.errorMessage = 'Invalid login info.';
        } else {
          this.errorMessage = 'Something happened. No idea why. Contact Jake, who will contact me. Or just contact me.';
        }
      }
    });
  }*/
}
