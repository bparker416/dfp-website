import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {SauceComponent} from "../sauce/sauce.component";
import {} from "@angular/common/http";
import {SauceService} from "../../../models/food-menu-models/sauce/sauce.service";
import {CheeseService} from "../../../models/food-menu-models/cheese/cheese.service";
import {CheeseComponent} from "../cheese/cheese.component";
import {VeggieComponent} from "../veggie/veggie.component";
import {VeggieService} from "../../../models/food-menu-models/veggie/veggie.service";
import {MeatComponent} from "../meat/meat.component";
import {MeatService} from "../../../models/food-menu-models/meat/meat.service";

@Component({
    selector: 'app-byo',
    imports: [CommonModule, SauceComponent,
        // TODO: `HttpClientModule` should not be imported into a component directly.
        // Please refactor the code to add `provideHttpClient()` call to the provider list in the
        // application bootstrap logic and remove the `HttpClientModule` import from this component.
        CheeseComponent, VeggieComponent, MeatComponent],
    providers: [ SauceService, CheeseService, VeggieService, MeatService],
    templateUrl: './byo.component.html',
    standalone: true,
    styleUrl: './byo.component.css'
})
export class ByoComponent {

}
