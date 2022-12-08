import { Component, OnInit } from '@angular/core';
import { GetsApiService } from '../API/gets-api.service';
import { Router } from '@angular/router';
import { StorageDBService } from '../storage/crud.service';


@Component({
  selector: 'app-inventario-escojer-arma',
  templateUrl: './inventario-escojer-arma.page.html',
  styleUrls: ['./inventario-escojer-arma.page.scss'],
})
export class InventarioEscojerArmaPage implements OnInit {
  ArmasAPI:any[]=[];
  searcherArmas: any;

  ArmaStorage: any;
  noEliminar: any;
  ListaArmas: any;

  constructor(public _services: GetsApiService, private router : Router, public storage: StorageDBService) {
    this._services.getArmas<any[]>("").subscribe(data => {
      this.ArmasAPI = data
      this.searcherArmas = this.ArmasAPI;
    })
  }

  ngOnInit() {
  }
  
  goToArmasDetails(id) {
    this.router.navigate(['/detalleArma', id]);
  }

  BuscadorArmas(event){
    const text = event.target.value;
    if(text && text.trim() != ''){
      this.searcherArmas = this.searcherArmas.filter((obj: any) => {
        return (obj.toLowerCase().indexOf(text.toLowerCase()) > -1)
      })
    }
    if(text == ''){
      this.searcherArmas = this.ArmasAPI;
    }
  }

  agregarArmas(id){
    this.storage.update('ArmasInventario', id);
    window.history.back();
  }
}
