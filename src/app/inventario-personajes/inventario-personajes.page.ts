import { Component, OnInit } from '@angular/core';
import { GetsApiService } from '../API/gets-api.service';
import { Router } from '@angular/router';
import { StorageDBService } from '../storage/crud.service';

@Component({
  selector: 'app-inventario-personajes',
  templateUrl: './inventario-personajes.page.html',
  styleUrls: ['./inventario-personajes.page.scss'],
})
export class InventarioPersonajesPage implements OnInit {

  PersonajesAPI:any[]=[];
  searcherPersonaje: any;
  ValidStorageUpdate: any;
  a: any;

  ListPersonajes:any;
  noEliminar:any;

  PersonajesStorage:any;

  constructor(public _services: GetsApiService, private router : Router, public storage: StorageDBService) { }

  ngOnInit() {
    this.storage.get('PersonajesInventario').then((items) => {
      this.PersonajesAPI = items;
      this.searcherPersonaje = this.PersonajesAPI;
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

  quitarPersonaje(){
    this.ListPersonajes = this.storage.get('PersonajesInventario');
    this.storage.remove('PersonajesInventario');
    this.PersonajesStorage = this.storage.get('PersonajesInventario');
  }

  getImagePersonaje(nombre: string){
    
    return "/assets/PersonajesImages/"+nombre
  }

  goToProductDetails(id) {
    this.router.navigate(['/infoPersonaje', id]);
  }
  
}