import { Component, OnInit } from '@angular/core';
import { GetsApiService } from '../API/gets-api.service';
import { Router } from '@angular/router';
import { StorageDBService } from '../storage/crud.service';


@Component({
  selector: 'app-inventario-armas',
  templateUrl: './inventario-armas.page.html',
  styleUrls: ['./inventario-armas.page.scss'],
})
export class InventarioArmasPage implements OnInit {

  ArmasAPI:any[]=[];
  searcherArmas: any;
  ListArmas:any;
  ArmasStorage:any;

  constructor(public _services: GetsApiService, private router : Router, public storage: StorageDBService) {}

  ngOnInit() {
    this.storage.get('ArmasInventario').then((items) => {
      this.ArmasAPI = items;
      this.searcherArmas = this.ArmasAPI;
    });
  }
  
  ionViewDidEnter() {
    this.storage.get('ArmasInventario').then((items) => {
      this.ArmasAPI = items;
      this.searcherArmas = this.ArmasAPI;
    });
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

  quitarArmas(){
    this.ListArmas = this.storage.get('ArmasInventario');
    this.storage.remove('ArmasInventario');
    this.ArmasStorage = this.storage.get('ArmasInventario');
  }
}
