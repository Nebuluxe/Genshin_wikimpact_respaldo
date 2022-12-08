import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetsApiService {

  constructor(public _http: HttpClient) { }

  //gets personajes
  getPersonajes<T>(url : string){
    url = 'https://api.genshin.dev/characters'
    return this._http.get<T[]>(url)
  }

  getDetallePersonaje<T>(url : string, NomPersonaje: string){
    url = "https://api.genshin.dev/characters/"+NomPersonaje
    return this._http.get<T[]>(url)
  }

  //gets artefactos
  getArtefactos<T>(url : string){
    url = 'https://api.genshin.dev/artifacts'
    return this._http.get<T[]>(url)
  }
  getDetalleArtefacto<T>(url : string, NomArtefacto: string){
    url = "https://api.genshin.dev/artifacts/"+NomArtefacto
    return this._http.get<T[]>(url)
  }
  //gets armas
  getArmas<T>(url : string){
    url = 'https://api.genshin.dev/weapons'
    return this._http.get<T[]>(url)
  }

  getDetalleArma<T>(url : string, idArNomArmama: string){
    url = "https://api.genshin.dev/weapons/"+idArNomArmama
    return this._http.get<T[]>(url)
  }

  //gets libros de asencion
  getLibrosAscension<T>(url : string){
    url = 'https://api.genshin.dev/materials/talent-book'
    return this._http.get<T[]>(url)
  }

  //Gets Enemigos
  getEnemigos<T>(url: string){
    url = "https://api.genshin.dev/enemies"
    return this._http.get<T[]>(url)
  }

  getDetalleEnemigos<T>(url : string, NomEnemigo: string){
    url = "https://api.genshin.dev/enemies/"+NomEnemigo
    return this._http.get<T[]>(url)
  }

  getElementos<T>(url: string){
    url = "https://api.genshin.dev/elements"
    return this._http.get<T[]>(url)
  }

  getDetalleElementos<T>(url : string, NomElemento: string){
    url = "https://api.genshin.dev/elements/"+NomElemento
    return this._http.get<T[]>(url)
  }
  //hacer modelo api y probar poner 0 en artefactos al llamar api 

  //gets materiales asencion armas

  //gets materiales asencion armas
}
