import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import {PizzaComponent} from "../pizza/pizza.component";
import {} from "@angular/common/http";
import {PizzaService} from "../../models/food-menu-models/pizza/pizza.service";
import {AppetizerService} from "../../models/food-menu-models/appetizer/appetizer.service";
import {AppetizerComponent} from "../appetizer/appetizer.component";
import {SideComponent} from "../side/side.component";
import {SideService} from "../../models/food-menu-models/side/side.service";
import {SaladComponent} from "../salad/salad.component";
import {SaladService} from "../../models/food-menu-models/salad/salad.service";
import {SandoService} from "../../models/food-menu-models/sando/sando.service";
import {SandoComponent} from "../sando/sando.component";
import {ByoComponent} from "../build-your-own/byo/byo.component";
import {DessertComponent} from "../dessert/dessert.component";
import {DessertService} from "../../models/food-menu-models/dessert/dessert.service";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    HeaderComponent,
    PizzaComponent,
    AppetizerComponent,
    
// TODO: `HttpClientModule` should not be imported into a component directly.
// Please refactor the code to add `provideHttpClient()` call to the provider list in the
// application bootstrap logic and remove the `HttpClientModule` import from this component.
HttpClientModule,
    SideComponent,
    SaladComponent,
    SandoComponent,
    ByoComponent,
    DessertComponent,
  ],
  providers: [PizzaService, AppetizerService, SideService, SaladService, SandoService, DessertService],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  constructor(
    private pizzaService: PizzaService,
    private appetizerService: AppetizerService,
    private sideService: SideService,
    private saladService: SaladService,
    private sandoService: SandoService,
    private dessertService: DessertService,
  ) {}
}
