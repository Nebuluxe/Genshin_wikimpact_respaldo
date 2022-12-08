import { Component, OnInit } from '@angular/core';
import { GetsApiService } from '../API/gets-api.service';
import { Router } from '@angular/router';
import { StorageDBService } from '../storage/crud.service';

@Component({
  selector: 'app-inventario-escoger-artefactos',
  templateUrl: './inventario-escoger-artefactos.page.html',
  styleUrls: ['./inventario-escoger-artefactos.page.scss'],
})
export class InventarioEscogerArtefactosPage implements OnInit {
  ArtefactosAPI:any[]=[];
  searcherArtefactos: any;

  ArtefactosStorage: any;
  noEliminar: any;
  ListaArtefactos: any;

  constructor(public _services: GetsApiService, private router : Router, public storage: StorageDBService) {
    this._services.getArtefactos<any[]>("").subscribe(data => {
      this.ArtefactosAPI = data
      this.searcherArtefactos = this.ArtefactosAPI;
    })
  }

  ngOnInit() {
  }
  
  goToArmasDetails(id) {
    this.router.navigate(['/detalleArma', id]);
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

  agregarArtefacto(id){
    this.storage.update('ArtefactosInventario', id);
    window.history.back();
  }

}
