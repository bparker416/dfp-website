import { Component } from '@angular/core';
import {} from "@angular/common/http";

@Component({
  selector: 'app-home',
  imports: [
    // TODO: `HttpClientModule` should not be imported into a component directly.
    // Please refactor the code to add `provideHttpClient()` call to the provider list in the
    // application bootstrap logic and remove the `HttpClientModule` import from this component.
  ],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
