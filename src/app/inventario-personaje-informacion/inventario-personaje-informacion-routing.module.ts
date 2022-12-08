import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventarioPersonajeInformacionPage } from './inventario-personaje-informacion.page';

const routes: Routes = [
  {
    path: '',
    component: InventarioPersonajeInformacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventarioPersonajeInformacionPageRoutingModule {}
