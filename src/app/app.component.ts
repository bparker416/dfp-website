import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import {CommonModule} from "@angular/common";
import {FooterComponent} from "./footer/footer.component";
import {} from "@angular/common/http";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CommonModule,
    // TODO: `HttpClientModule` should not be imported into a component directly.
    // Please refactor the code to add `provideHttpClient()` call to the provider list in the
    // application bootstrap logic and remove the `HttpClientModule` import from this component.
  ],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Damn Fine Pizza';
}
