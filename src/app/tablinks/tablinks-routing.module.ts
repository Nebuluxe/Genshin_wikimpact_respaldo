import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablinksPage } from './tablinks.page';

const routes: Routes = [
  {
    path: 'tablinks',
    component: TablinksPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'artefactos',
        loadChildren: () => import('../artefactos/artefactos.module').then( m => m.ArtefactosPageModule)
      },
      {
        path: 'personajes',
        loadChildren: () => import('../personajes/personajes.module').then( m => m.PersonajesPageModule)
      },
      {
        path: 'armas',
        loadChildren: () => import('../armas/armas.module').then( m => m.ArmasPageModule)
      },
      {
        path: 'mapa',
        loadChildren: () => import('../mapa/mapa.module').then( m => m.MapaPageModule)
      },
      {
        path: 'ajustes',
        loadChildren: () => import('../ajustes/ajustes.module').then(m => m.AjustesPageModule)
      },
      {
        path: "",
        redirectTo: "tablinks/home",
        pathMatch: "full"
      }
    ]
 },
 {
  path: "",
  redirectTo: "tablinks/home",
  pathMatch: "full"
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablinksPageRoutingModule {}
