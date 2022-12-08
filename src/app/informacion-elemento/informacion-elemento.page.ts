import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetsApiService } from '../API/gets-api.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-informacion-elemento',
  templateUrl: './informacion-elemento.page.html',
  styleUrls: ['./informacion-elemento.page.scss'],
})
export class InformacionElementoPage implements OnInit {

  DetalleElemento:any[]=[];
  Elementoid: any;
  elementoID:any;

  constructor(public _services: GetsApiService,private route: ActivatedRoute, private router : Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(id => {
      this.elementoID = id.get('ID')
      this.Elementoid = id; 
    });

    this._services.getDetalleElementos<any[]>("", this.elementoID).subscribe(data => {
      this.DetalleElemento = data
    })
  }

  goToElementosDetails(id) {
    this.router.navigate(['/DetalleElemento', id.toLowerCase()]);
  }

}
