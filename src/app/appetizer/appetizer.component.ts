import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {AppetizerService} from "../models/appetizer/appetizer.service";

@Component({
  selector: 'app-appetizer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appetizer.component.html',
  styleUrl: './appetizer.component.css'
})
export class AppetizerComponent implements OnInit{
  appetizers: any[] = [];

  constructor(private appetizerService: AppetizerService) {}

  ngOnInit(): void {
    this.appetizerService.getAppetizers().subscribe((data) => {this.appetizers = data});
  }

}
