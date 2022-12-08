import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { StorageDBService } from '../storage/crud.service';
import { GetsApiService } from '../API/gets-api.service';


@Component({
  selector: 'app-inventario-personaje-informacion',
  templateUrl: './inventario-personaje-informacion.page.html',
  styleUrls: ['./inventario-personaje-informacion.page.scss'],
})
export class InventarioPersonajeInformacionPage implements OnInit {

  DetallePersonaje:any[]=[];
  Personajeid: any;
  pjID:any;

  armaId:any;

  artefcatoId:any;
  
  constructor(public _services: GetsApiService,private route: ActivatedRoute,  private router : Router, public storage: StorageDBService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(id => {
      this.pjID = id.get('ID')
      this.Personajeid = id; 
      console.log(this.pjID);
    });

    this._services.getDetallePersonaje<any[]>("", this.pjID).subscribe(data => {
      this.DetallePersonaje = data
    })
  }

  goToArmasDetails(id) {
    this.router.navigate(['/detalleArma', id]);
  }

  goToArtefactosDetails(id) {
    this.router.navigate(['/detalleArtefacto', id]);
  }

  goToPersonajeDetails(){
    this.router.navigate(['/detallePersonaje', this.pjID]);
  }

  quitarArma(){
    let KeyArmaPersonaje = this.pjID+"ArmaEquipada";
    this.storage.remove(KeyArmaPersonaje);
    this.armaId = null;
  }

  agregarArma(){
    let KeyArmaPersonaje = this.pjID+"ArmaEquipada";
    this.router.navigate(['/armaPersonaje', this.pjID]);
  }
  
  agregarArtefactos(){
    this.router.navigate(['/artefactosPersonaje', this.pjID]);
  }

  quitarArtefactos(){
    let KeyArtefactoPersonaje = this.pjID+"ArtefactosEquipados";
    console.log(KeyArtefactoPersonaje);
    this.storage.remove(KeyArtefactoPersonaje);
    this.artefcatoId = null;
  }


  ionViewDidEnter(){
    let KeyArmaPersonaje = this.pjID+"ArmaEquipada";
    this.storage.get(KeyArmaPersonaje).then((pj) => {
      this.armaId = pj;
      console.log(this.armaId);
    });

    let KeyArtefactosPersonaje = this.pjID+"ArtefactosEquipados";
    this.storage.get(KeyArtefactosPersonaje).then((pj) => {
      this.artefcatoId = pj;
      console.log(this.artefcatoId);
    });

  }

  goToElementosDetails(id) {
    this.router.navigate(['/DetalleElemento', id.toLowerCase()]);
  }

}
