import { Component, OnInit } from '@angular/core';
import { GetsApiService } from '../API/gets-api.service';
import { Router } from '@angular/router';
import { StorageDBService } from '../storage/crud.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-inventario-artefactos-personaje',
  templateUrl: './inventario-artefactos-personaje.page.html',
  styleUrls: ['./inventario-artefactos-personaje.page.scss'],
})
export class InventarioArtefactosPersonajePage implements OnInit {

  ArtefactosAPI:any[]=[];
  searcherArtefactos: any;
  ListArtefactos:any;
  ArtefactoStorage:any;

  pjID:any;

  constructor(public _services: GetsApiService, private router : Router, public storage: StorageDBService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(id => {
      this.pjID = id.get('ID')
    });

    this.storage.get('ArtefactosInventario').then((items) => {
      this.ArtefactosAPI = items;
      this.searcherArtefactos = this.ArtefactosAPI;
    });
  }
  
  ionViewDidEnter() {
    this.storage.get('ArtefactosInventario').then((items) => {
      this.ArtefactosAPI = items;
      this.searcherArtefactos = this.ArtefactosAPI;
    });
  }
  

  BuscadorArmas(event){
    const text = event.target.value;
    if(text && text.trim() != ''){
      this.searcherArtefactos = this.searcherArtefactos.filter((obj: any) => {
        return (obj.toLowerCase().indexOf(text.toLowerCase()) > -1)
      })
    }
    if(text == ''){
      this.searcherArtefactos = this.ArtefactosAPI;
    }
  }

  agregarArtefactos(id){
    let KeyArmada = this.pjID+'ArtefactosEquipados';
    this.storage.set(KeyArmada, id);
    window.history.back();
  }
}
