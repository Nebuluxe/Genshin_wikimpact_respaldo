import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageDBService } from '../storage/crud.service';
import { Router } from '@angular/router';
import { SrvRecord } from 'dns';




@Component({
  selector: 'app-inventario-formacion-equipo',
  templateUrl: './inventario-formacion-equipo.page.html',
  styleUrls: ['./inventario-formacion-equipo.page.scss'],
})
export class InventarioFormacionEquipoPage implements OnInit {
  DetalleEquipo:any[]=[];
  NumeroEquipo: any;
  EquipoID:any;
  
  //nombre de los personajes para las tarjetas
  NombrePersonajeNumero1:string;
  NombrePersonajeNumero2:string;
  NombrePersonajeNumero3:string;
  NombrePersonajeNumero4:string;

  //variables para armar la key del storge del personaje corespondiente
  KeyBdStoragePersonaje1:string;
  KeyBdStoragePersonaje2:string;
  KeyBdStoragePersonaje3:string;
  KeyBdStoragePersonaje4:string;


  numeroPersonaje:string;

  constructor(public route: ActivatedRoute, public storage: StorageDBService, private router : Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(id => {
      this.EquipoID = id.get('ID')
      this.NumeroEquipo = id; 
    });
  }

  ionViewDidEnter(){
    this.KeyBdStoragePersonaje1 = this.EquipoID + 'Personaje1'
    this.storage.get(this.KeyBdStoragePersonaje1).then((pj) => {
      this.NombrePersonajeNumero1 = pj;
    });

    this.KeyBdStoragePersonaje2 = this.EquipoID + 'Personaje2'
    this.storage.get(this.KeyBdStoragePersonaje2).then((pj) => {
      this.NombrePersonajeNumero2 = pj;
    });

    this.KeyBdStoragePersonaje3 = this.EquipoID + 'Personaje3'
    this.storage.get(this.KeyBdStoragePersonaje3).then((pj) => {
      this.NombrePersonajeNumero3 = pj;
    });

    this.KeyBdStoragePersonaje4 = this.EquipoID + 'Personaje4'
    this.storage.get(this.KeyBdStoragePersonaje4).then((pj) => {
      this.NombrePersonajeNumero4 = pj;
    });
  }

  goToProductDetails(id) {
    this.router.navigate(['/infoPersonaje', id]);
  }

  SeleccionarPersonaje(id) {
    this.router.navigate(['/SeleccionarPersonaje', id]);
  }

  DeleteAll(){
    this.storage.remove(this.KeyBdStoragePersonaje1);
    this.storage.remove(this.KeyBdStoragePersonaje2);
    this.storage.remove(this.KeyBdStoragePersonaje3);
    this.storage.remove(this.KeyBdStoragePersonaje4);

    this.NombrePersonajeNumero1 = null;
    this.NombrePersonajeNumero2 = null;
    this.NombrePersonajeNumero3 = null;
    this.NombrePersonajeNumero4 = null;
  }

  //Personajeid.params.ID

  

}
