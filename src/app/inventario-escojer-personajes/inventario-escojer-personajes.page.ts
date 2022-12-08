import { Component, OnInit } from '@angular/core';
import { GetsApiService } from '../API/gets-api.service';
import { Router } from '@angular/router';
import { StorageDBService } from '../storage/crud.service';

@Component({
  selector: 'app-inventario-escojer-personajes',
  templateUrl: './inventario-escojer-personajes.page.html',
  styleUrls: ['./inventario-escojer-personajes.page.scss'],
})
export class InventarioEscojerPersonajesPage implements OnInit {

  PersonajesAPI:any[]=[];
  searcherPersonaje: any;
  ValidStorageUpdate: any;
  a: any[]=[];

  ListPersonajes:any;
  noEliminar:any;

  PersonajesStorage:any;

  constructor(public _services: GetsApiService, private router : Router, public storage: StorageDBService) {
    this.storage.get('PersonajesInventario');
    this._services.getPersonajes<any[]>("").subscribe(data => {
      this.PersonajesAPI = data
      this.searcherPersonaje = this.PersonajesAPI;
    })
  }

  ngOnInit() {
  }

  public async ActStorage() {
      await this.storage.set('Personajes', this.PersonajesAPI);
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

  goToProductDetails(id) {
    this.storage.get('Personajes').then((img) => {
      this.a = img;
    });

    this.router.navigate(['/detallePersonaje', id]);
  }

  agregarPersonaje(id){
    this.storage.update('PersonajesInventario', id);
    window.history.back();
  }

  getImagePersonaje(nombre: string){
    return "/assets/PersonajesImages/"+nombre
  }

}