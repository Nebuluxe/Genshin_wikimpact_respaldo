import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetsApiService } from '../API/gets-api.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-informacion-personaje',
  templateUrl: './informacion-personaje.page.html',
  styleUrls: ['./informacion-personaje.page.scss'],
})
export class InformacionPersonajePage implements OnInit {

  DetallePersonaje:any[]=[];
  Personajeid: any;
  pjID:any;
  
  constructor(public _services: GetsApiService,private route: ActivatedRoute, private router : Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(id => {
      this.pjID = id.get('ID')
      this.Personajeid = id; 
    });

    this._services.getDetallePersonaje<any[]>("", this.pjID).subscribe(data => {
      this.DetallePersonaje = data
    })
  }

  goToElementosDetails(id) {
    this.router.navigate(['/DetalleElemento', id.toLowerCase()]);
  }
}
