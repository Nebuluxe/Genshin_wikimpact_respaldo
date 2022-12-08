import { Component } from '@angular/core';
import { GetsApiService } from '../API/gets-api.service';
import { Router } from '@angular/router';
import { StorageDBService } from '../storage/crud.service';
import { promise } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  LibrosAscencionAPI:any[]=[];

  constructor(public _services: GetsApiService, private router : Router, public storage: StorageDBService) { }

  ngOnInit() {
    let a = this.storage.get('TemaApp').toString();
    if(a == "0"){
      document.body.removeAttribute('color-theme')
      document.getElementById('LogoWikiHome').setAttribute('src','/assets/images/GenshinWikiLogoNegro.png')
      document.getElementById('LogoSlide').setAttribute('src','/assets/images/GenshinWikiLogoNegro.png')
    }
    else{
      document.body.setAttribute('color-theme','dark')
      document.getElementById('LogoWikiHome').setAttribute('src','/assets/images/GenshinWikiLogoBlanco.png')
      document.getElementById('LogoSlide').setAttribute('src','/assets/images/GenshinWikiLogoBlanco.png')
    }
  }

  toggleTheme(event){
    if(event.detail.checked){ 
      document.body.setAttribute('color-theme','dark')
    }
    else{
      document.body.removeAttribute('color-theme')
    }
  }
}
