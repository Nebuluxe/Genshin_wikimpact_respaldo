import { Component, OnInit } from '@angular/core';
import { StorageDBService } from '../storage/crud.service';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
})
export class AjustesPage {
  constructor(public storage: StorageDBService){}


  EstadoDetPJ: any;
  a: any;
  valTema: any;
  temaInicio: any;

  toggleTheme(event){
    if(event.detail.checked){
      document.body.setAttribute('color-theme','dark')
      document.getElementById('LogoWikiHome').setAttribute('src','/assets/images/GenshinWikiLogoBlanco.png')
      document.getElementById('LogoSlide').setAttribute('src','/assets/images/GenshinWikiLogoBlanco.png')
      this.storage.set('TemaApp', 1);
      console.log(this.storage.get('TemaApp'));
    }
    else{
      document.body.removeAttribute('color-theme')
      document.getElementById('LogoWikiHome').setAttribute('src','/assets/images/GenshinWikiLogoNegro.png')
      document.getElementById('LogoSlide').setAttribute('src','/assets/images/GenshinWikiLogoNegro.png')
      this.storage.set('TemaApp', 0);
      console.log(this.storage.get('TemaApp'));
    }
  }
  
  ngOnInit(){
    let ColorTheme = document.body.getAttribute('color-theme')
    if(ColorTheme){
      document.getElementById('dark_mode').setAttribute('checked','checked')
    }
    else{
      document.getElementById('dark_mode').removeAttribute('checked')
    }
  }

  ionViewDidEnter() {

  }

  public async DetallePJ(event) {
    this.storage.get('DetallePJ').then((img) => {
      this.a = img;
      console.log(this.a);
    });
    if(event.detail.checked){
      await this.storage.set('DetallePJ', 1);
    }
    else{
      await this.storage.set('DetallePJ', 0);
    }
}







}
