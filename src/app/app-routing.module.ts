import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tablinks/tablinks.module').then( m => m.TablinksPageModule)
  },
  {
    path: 'ajustes',
    loadChildren: () => import('./ajustes/ajustes.module').then( m => m.AjustesPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'registro-diario',
    loadChildren: () => import('./registro-diario/registro-diario.module').then( m => m.RegistroDiarioPageModule)
  },
  {
    path: 'detallePersonaje/:ID',
    loadChildren: () => import('./informacion-personaje/informacion-personaje.module').then(m => m.InformacionPersonajePageModule)
  },
  {
    path: 'detalleArtefacto/:ID',
    loadChildren: () => import('./informacion-artefacto/informacion-artefacto.module').then(m => m.InformacionArtefactoPageModule)
  },
  {
    path: 'detalleArma/:ID',
    loadChildren: () => import('./informacion-arma/informacion-arma.module').then(m => m.InformacionArmaPageModule)
  },
  {
    path: 'simulador-deseos',
    loadChildren: () => import('./simulador-deseos/simulador-deseos.module').then( m => m.SimuladorDeseosPageModule)
  },
  {
    path: 'enemigos',
    loadChildren: () => import('./enemigos/enemigos.module').then( m => m.EnemigosPageModule)
  },
  {
    path: 'inventario',
    loadChildren: () => import('./inventario/inventario.module').then( m => m.InventarioPageModule)
  },
  {
    path: 'DetalleEnemigo/:ID',
    loadChildren: () => import('./informacion-enemigo/informacion-enemigo.module').then( m => m.InformacionEnemigoPageModule)
  },
  {
    path: 'inventario-personajes',
    loadChildren: () => import('./inventario-personajes/inventario-personajes.module').then( m => m.InventarioPersonajesPageModule)
  },
  {
    path: 'inventario-armas',
    loadChildren: () => import('./inventario-armas/inventario-armas.module').then( m => m.InventarioArmasPageModule)
  },
  {
    path: 'inventario-escojer-personajes',
    loadChildren: () => import('./inventario-escojer-personajes/inventario-escojer-personajes.module').then( m => m.InventarioEscojerPersonajesPageModule)
  },
  {
    path: 'inventario-escojer-arma',
    loadChildren: () => import('./inventario-escojer-arma/inventario-escojer-arma.module').then( m => m.InventarioEscojerArmaPageModule)
  },
  {
    path: 'inventario-bestiario',
    loadChildren: () => import('./inventario-bestiario/inventario-bestiario.module').then( m => m.InventarioBestiarioPageModule)
  },
  {
    path: 'inventario-equipos',
    loadChildren: () => import('./inventario-equipos/inventario-equipos.module').then( m => m.InventarioEquiposPageModule)
  },
  {
    path: 'verEquipo/:ID',
    loadChildren: () => import('./inventario-formacion-equipo/inventario-formacion-equipo.module').then( m => m.InventarioFormacionEquipoPageModule)
  },
  {
    path: 'SeleccionarPersonaje/:ID',
    loadChildren: () => import('./inventario-equipo-escojer-personaje/inventario-equipo-escojer-personaje.module').then( m => m.InventarioEquipoEscojerPersonajePageModule)
  },
  {
    path: 'infoPersonaje/:ID',
    loadChildren: () => import('./inventario-personaje-informacion/inventario-personaje-informacion.module').then( m => m.InventarioPersonajeInformacionPageModule)
  },
  {
    path: 'armaPersonaje/:ID',
    loadChildren: () => import('./inventario-arma-personaje/inventario-arma-personaje.module').then( m => m.InventarioArmaPersonajePageModule)
  },
  {
    path: 'artefactosPersonaje/:ID',
    loadChildren: () => import('./inventario-artefactos-personaje/inventario-artefactos-personaje.module').then( m => m.InventarioArtefactosPersonajePageModule)
  },
  {
    path: 'inventario-artefactos',
    loadChildren: () => import('./inventario-artefactos/inventario-artefactos.module').then( m => m.InventarioArtefactosPageModule)
  },
  {
    path: 'inventario-escoger-artefactos',
    loadChildren: () => import('./inventario-escoger-artefactos/inventario-escoger-artefactos.module').then( m => m.InventarioEscogerArtefactosPageModule)
  },
  {
    path: 'elementos',
    loadChildren: () => import('./elementos/elementos.module').then( m => m.ElementosPageModule)
  },
  {
    path: 'DetalleElemento/:ID',
    loadChildren: () => import('./informacion-elemento/informacion-elemento.module').then( m => m.InformacionElementoPageModule)
  }









];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
