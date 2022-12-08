import { Component, OnInit } from '@angular/core';
import { GetsApiService } from '../API/gets-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artefactos',
  templateUrl: './artefactos.page.html',
  styleUrls: ['./artefactos.page.scss'],
})

export class ArtefactosPage implements OnInit {

  ArtefactosAPI:any[]=[];
  searcherArtefactos: any;

  constructor(public _services: GetsApiService, private router : Router) {
    this._services.getArtefactos<any[]>("").subscribe(data => {
      this.ArtefactosAPI = data
      this.searcherArtefactos = this.ArtefactosAPI;
    })
  }

  ngOnInit() {
  }

  goToArtifactsDetails(id) {
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

}
