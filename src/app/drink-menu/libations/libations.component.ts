import {Component, OnInit} from '@angular/core';
import {LibationsService} from "../../models/drink-menu-models/libations/libations.service";

@Component({
  selector: 'app-libations',
  standalone: true,
  imports: [],
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
