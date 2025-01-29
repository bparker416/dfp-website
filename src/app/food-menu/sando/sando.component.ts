import {Component, OnInit} from '@angular/core';
import {SandoService} from "../../models/food-menu-models/sando/sando.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-sando',
  imports: [CommonModule],
  templateUrl: './sando.component.html',
  standalone: true,
  styleUrl: './sando.component.css'
})
export class SandoComponent implements OnInit {
  sandos: any[] = [];

  constructor(private sandoService: SandoService) { }

  ngOnInit(): void {
    this.sandoService.getActiveSandos().subscribe((data) => {this.sandos = data});
  }
}
