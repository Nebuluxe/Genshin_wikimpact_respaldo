import { Component, OnInit } from '@angular/core';
import { GetsApiService } from '../API/gets-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventario-bestiario',
  templateUrl: './inventario-bestiario.page.html',
  styleUrls: ['./inventario-bestiario.page.scss'],
})
export class InventarioBestiarioPage implements OnInit {

  EnemigosAPI:any[]=[];
  searcherEnemigos: any;

  constructor(public _services: GetsApiService, private router : Router) {
    this._services.getEnemigos<any[]>("").subscribe(data => {
      this.EnemigosAPI = data
      this.searcherEnemigos = this.EnemigosAPI;
    })
  }

  ngOnInit() {
  }

  goToEnemigosDetails(id) {
    this.router.navigate(['/DetalleEnemigo', id]);
  }

  BuscadorEnemigos(event){
    const text = event.target.value;
    if(text && text.trim() != ''){
      this.searcherEnemigos = this.searcherEnemigos.filter((obj: any) => {
        return (obj.toLowerCase().indexOf(text.toLowerCase()) > -1)
      })
    }
    if(text == ''){
      this.searcherEnemigos = this.EnemigosAPI;
    }
  }
}
