import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetsApiService } from '../API/gets-api.service';

@Component({
  selector: 'app-informacion-artefacto',
  templateUrl: './informacion-artefacto.page.html',
  styleUrls: ['./informacion-artefacto.page.scss'],
})
export class InformacionArtefactoPage implements OnInit {

  DetalleArtefacto:any[]=[];
  Artefactoid: any;
  artID:any;

  constructor(public _services: GetsApiService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(id => {
      this.artID = id.get('ID')
      this.Artefactoid = id; 
    });

    this._services.getDetalleArtefacto<any[]>("", this.artID).subscribe(data => {
      this.DetalleArtefacto = data
    })
  }

}
