import {Component, OnInit} from '@angular/core';
import {LibationsService} from "../../models/drink-menu-models/libations/libations.service";
import {CommonModule} from "@angular/common";
import {} from "@angular/common/http";

@Component({
  selector: 'app-libations',
  standalone: true,
  imports: [CommonModule, 
// TODO: `HttpClientModule` should not be imported into a component directly.
// Please refactor the code to add `provideHttpClient()` call to the provider list in the
// application bootstrap logic and remove the `HttpClientModule` import from this component.
HttpClientModule],
  templateUrl: './libations.component.html',
  styleUrl: './libations.component.css'
})
export class LibationsComponent implements OnInit {
  libations: any[] = [];

  constructor(private libationsService: LibationsService) { }

  ngOnInit():void {
    this.libationsService.getActiveLibations().subscribe((data) => {this.libations = data});
  }
}
