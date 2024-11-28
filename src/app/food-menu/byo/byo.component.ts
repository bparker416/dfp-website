import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {SauceComponent} from "../sauce/sauce.component";
import {HttpClientModule} from "@angular/common/http";
import {SauceService} from "../../models/food-menu-models/sauce/sauce.service";
import {CheeseService} from "../../models/food-menu-models/cheese/cheese.service";
import {CheeseComponent} from "../cheese/cheese.component";
import {VeggieComponent} from "../veggie/veggie.component";
import {VeggieService} from "../../models/food-menu-models/veggie/veggie.service";

@Component({
  selector: 'app-byo',
  standalone: true,
  imports: [CommonModule, SauceComponent, HttpClientModule, CheeseComponent, VeggieComponent],
  providers: [HttpClientModule, SauceService, CheeseService, VeggieService],
  templateUrl: './byo.component.html',
  styleUrl: './byo.component.css'
})
export class ByoComponent {

}
