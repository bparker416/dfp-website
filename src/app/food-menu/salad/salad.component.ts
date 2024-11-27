import {Component, OnInit} from '@angular/core';
import {SaladService} from "../../models/food-menu-models/salad/salad.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-salad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './salad.component.html',
  styleUrl: './salad.component.css'
})
export class SaladComponent implements OnInit {
  salads: any[] = [];

  constructor(private saladService: SaladService) { }

  ngOnInit(): void {
    this.saladService.getSalads().subscribe((data) => {this.salads = data});
  }
}
