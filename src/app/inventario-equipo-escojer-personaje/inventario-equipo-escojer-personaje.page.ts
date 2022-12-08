import { Component, OnInit } from '@angular/core';
import { GetsApiService } from '../API/gets-api.service';
import { Router } from '@angular/router';
import { StorageDBService } from '../storage/crud.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inventario-equipo-escojer-personaje',
  templateUrl: './inventario-equipo-escojer-personaje.page.html',
  styleUrls: ['./inventario-equipo-escojer-personaje.page.scss'],
})
export class InventarioEquipoEscojerPersonajePage implements OnInit {
  PersonajesAPI:any[]=[];
  searcherPersonaje: any;
  ValidStorageUpdate: any;
  a: any;

  ListPersonajes:any;
  noEliminar:any;

  PersonajesStorage:any;

  selectedPjID:string;

  constructor(public _services: GetsApiService, private router : Router, public storage: StorageDBService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.storage.get('PersonajesInventario').then((items) => {
      this.PersonajesAPI = items;
      this.searcherPersonaje = this.PersonajesAPI;
    });

    this.route.paramMap.subscribe(id => {
      this.selectedPjID = id.get('ID')
      console.log(this.selectedPjID);
    });
  }

  ionViewDidEnter(){
    this.storage.get('PersonajesInventario').then((items) => {
      this.PersonajesAPI = items;
      this.searcherPersonaje = this.PersonajesAPI;
    });
  }
  
  BuscadorPersonajes(event){
    const text = event.target.value;
    if(text && text.trim() != ''){
      this.searcherPersonaje = this.searcherPersonaje.filter((obj: any) => {
        return (obj.toLowerCase().indexOf(text.toLowerCase()) > -1)
      })
    }
    if(text == ''){
      this.searcherPersonaje = this.PersonajesAPI;
    }
  }

  getImagePersonaje(nombre: string){
    return "/assets/PersonajesImages/"+nombre
  }

  seleccionarPJ(id){
    this.storage.set(this.selectedPjID, id);
    console.log(this.selectedPjID);
    console.log(id);
    window.history.back();
  }

}
