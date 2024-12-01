import {Component, OnInit} from '@angular/core';
import {LibationsService} from "../../models/drink-menu-models/libations/libations.service";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-libations',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './libations.component.html',
  styleUrl: './libations.component.css'
})
export class LibationsComponent implements OnInit {
  libations: any[] = [];

  constructor(private libationsService: LibationsService) { }

  ngOnInit():void {
    this.libationsService.getLibations().subscribe((data) => {this.libations = data});
  }
}
