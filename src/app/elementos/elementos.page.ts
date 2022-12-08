import { Component, OnInit } from '@angular/core';
import { GetsApiService } from '../API/gets-api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-elementos',
  templateUrl: './elementos.page.html',
  styleUrls: ['./elementos.page.scss'],
})
export class ElementosPage implements OnInit {

  ElementosAPI:any[]=[];

  constructor(public _services: GetsApiService, private router : Router) {
    this._services.getElementos<any[]>("").subscribe(data => {
      this.ElementosAPI = data
    })
  }

  ngOnInit() {
  }
  
  goToElementosDetails(id) {
    this.router.navigate(['/DetalleElemento', id]);
  }

}
