import {Component, OnInit} from '@angular/core';
import {SaladService} from "../../models/food-menu-models/salad/salad.service";
import {CommonModule} from "@angular/common";

@Component({
    selector: 'app-salad',
    imports: [CommonModule],
    templateUrl: './salad.component.html',
    standalone: true,
    styleUrl: './salad.component.css'
})
export class SaladComponent implements OnInit {
  salads: any[] = [];

  constructor(private saladService: SaladService) { }

  ngOnInit(): void {
    this.saladService.getActiveSalads().subscribe((data) => {this.salads = data});
  }
}
