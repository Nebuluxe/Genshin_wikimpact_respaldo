import { Component, OnInit } from '@angular/core';
import { GetsApiService } from '../API/gets-api.service';
import { Router } from '@angular/router';
import { StorageDBService } from '../storage/crud.service';


@Component({
  selector: 'app-inventario-artefactos',
  templateUrl: './inventario-artefactos.page.html',
  styleUrls: ['./inventario-artefactos.page.scss'],
})
export class InventarioArtefactosPage implements OnInit {

  ArtefactosAPI:any[]=[];
  searcherArtefactos: any;
  ListArtefactos:any;
  ArtefactoStorage:any;

  constructor(public _services: GetsApiService, private router : Router, public storage: StorageDBService) {}

  ngOnInit() {
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
  
  goToArmasDetails(id) {
    this.router.navigate(['/detalleArtefacto', id]);
  }

  BuscadorArtefactos(event){
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

  quitarArtefactos(){
    this.ListArtefactos = this.storage.get('ArtefactosInventario');
    this.storage.remove('ArtefactosInventario');
    this.ArtefactoStorage = this.storage.get('ArtefactosInventario');
  }

}
