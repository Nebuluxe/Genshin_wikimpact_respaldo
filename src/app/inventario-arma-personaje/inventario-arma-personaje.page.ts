import { Component, OnInit } from '@angular/core';
import { GetsApiService } from '../API/gets-api.service';
import { Router } from '@angular/router';
import { StorageDBService } from '../storage/crud.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-inventario-arma-personaje',
  templateUrl: './inventario-arma-personaje.page.html',
  styleUrls: ['./inventario-arma-personaje.page.scss'],
})
export class InventarioArmaPersonajePage implements OnInit {
  ArmasAPI:any[]=[];
  searcherArmas: any;
  ListArmas:any;
  ArmaStorage: any;
  pjID:any;

  constructor(public _services: GetsApiService, private router : Router, public storage: StorageDBService,private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(id => {
      this.pjID = id.get('ID')
    });

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
    let KeyArmada = this.pjID+'ArmaEquipada';
    this.storage.set(KeyArmada, id);
    window.history.back();
  }
}
