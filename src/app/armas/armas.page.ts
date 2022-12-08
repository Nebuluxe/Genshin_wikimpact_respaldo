import { Component, OnInit } from '@angular/core';
import { GetsApiService } from '../API/gets-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-armas',
  templateUrl: './armas.page.html',
  styleUrls: ['./armas.page.scss'],
})

export class ArmasPage implements OnInit {

  ArmasAPI:any[]=[];
  searcherArmas: any;

  constructor(public _services: GetsApiService, private router : Router) {
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

}
