import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inventario-equipos',
  templateUrl: './inventario-equipos.page.html',
  styleUrls: ['./inventario-equipos.page.scss'],
})
export class InventarioEquiposPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  goToEquipoDetails(id) {
    let a = id
    console.log(a);
    this.router.navigate(['/verEquipo', id]);
  }
}
