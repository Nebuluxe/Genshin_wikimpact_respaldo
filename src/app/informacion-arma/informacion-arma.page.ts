import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetsApiService } from '../API/gets-api.service';

@Component({
  selector: 'app-informacion-arma',
  templateUrl: './informacion-arma.page.html',
  styleUrls: ['./informacion-arma.page.scss'],
})
export class InformacionArmaPage implements OnInit {

  DetalleArma:any[]=[];
  Armaid: any;
  armaID:any;

  constructor(public _services: GetsApiService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(id => {
      this.armaID = id.get('ID')
      this.Armaid = id; 
    });

    this._services.getDetalleArma<any[]>("", this.armaID).subscribe(data => {
      this.DetalleArma = data
    })
  }
}
