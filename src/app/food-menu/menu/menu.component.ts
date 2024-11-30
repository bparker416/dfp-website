import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import {PizzaListComponent} from "../pizza-list/pizza-list.component";
import {HttpClientModule} from "@angular/common/http";
import {PizzaService} from "../../models/food-menu-models/pizza/pizza.service";
import {AppetizerService} from "../../models/food-menu-models/appetizer/appetizer.service";
import {AppetizerComponent} from "../appetizer/appetizer.component";
import {SideComponent} from "../side/side.component";
import {SideService} from "../../models/food-menu-models/side/side.service";
import {SaladComponent} from "../salad/salad.component";
import {SaladService} from "../../models/food-menu-models/salad/salad.service";
import {SandoService} from "../../models/food-menu-models/sando/sando.service";
import {SandoComponent} from "../sando/sando.component";
import {SauceComponent} from "../sauce/sauce.component";
import {SauceService} from "../../models/food-menu-models/sauce/sauce.service";
import {CheeseComponent} from "../cheese/cheese.component";
import {MeatComponent} from "../meat/meat.component";
import {VeggieComponent} from "../veggie/veggie.component";
import {ByoComponent} from "../byo/byo.component";
import {DessertComponent} from "../dessert/dessert.component";
import {DessertService} from "../../models/food-menu-models/dessert/dessert.service";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    HeaderComponent,
    PizzaListComponent,
    AppetizerComponent,
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
