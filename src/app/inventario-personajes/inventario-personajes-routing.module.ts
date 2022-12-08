import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventarioPersonajesPage } from './inventario-personajes.page';

const routes: Routes = [
  {
    path: '',
    component: InventarioPersonajesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventarioPersonajesPageRoutingModule {}
