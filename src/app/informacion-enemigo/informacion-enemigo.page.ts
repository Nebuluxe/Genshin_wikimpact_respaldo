import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetsApiService } from '../API/gets-api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-informacion-enemigo',
  templateUrl: './informacion-enemigo.page.html',
  styleUrls: ['./informacion-enemigo.page.scss'],
})
export class InformacionEnemigoPage implements OnInit {

  DetalleEnemigo:any[]=[];
  DescripcionElemental1:any[]=[];
  DescripcionElemental2:any[]=[];
  Enemigoid: any;
  enemigoID:any;
  list: number;

  constructor(public _services: GetsApiService,private route: ActivatedRoute, private router : Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(id => {
      this.enemigoID = id.get('ID')
      this.Enemigoid = id; 
    });

    this._services.getDetalleEnemigos<any[]>("", this.enemigoID).subscribe(data => {
      this.DetalleEnemigo = data;
      this.DescripcionElemental1 = data['elemental-descriptions'];
      this.DescripcionElemental2 = data['elemental-description'];
    })
  }

  
  goToElementosDetails(id) {
    this.router.navigate(['/DetalleElemento', id.toLowerCase()]);
  }
}
