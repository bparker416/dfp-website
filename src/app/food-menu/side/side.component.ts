import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {SideService} from "../../models/food-menu-models/side/side.service";

@Component({
  selector: 'app-side',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side.component.html',
  styleUrl: './side.component.css'
})
export class SideComponent implements OnInit {
  sides: any[] = [];

  constructor(private sideService: SideService) {}

  ngOnInit(): void {
    this.sideService.getActiveSides().subscribe((data) => {this.sides = data});
  }
}
