import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {AppetizerService} from "../../models/food-menu-models/appetizer/appetizer.service";

@Component({
  selector: 'app-appetizer',
  imports: [CommonModule],
  templateUrl: './appetizer.component.html',
  standalone: true,
  styleUrl: './appetizer.component.css'
})
export class AppetizerComponent implements OnInit{
  apps: any[] = [];

  constructor(private appetizerService: AppetizerService) {}

  ngOnInit(): void {
    this.appetizerService.getActiveAppetizers().subscribe((data) => {this.apps = data});
  }

}
