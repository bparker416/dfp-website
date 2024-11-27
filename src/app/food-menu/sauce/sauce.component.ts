import {Component, OnInit} from '@angular/core';
import {SauceService} from "../../models/food-menu-models/sauce/sauce.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-sauce',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sauce.component.html',
  styleUrl: './sauce.component.css'
})
export class SauceComponent implements OnInit {
  sauces: any[] = [];

  private constructor(private sauceService: SauceService) { }

  ngOnInit(): void {
    this.sauceService.getSauces().subscribe( (data) => { this.sauces = data });
  }
}
