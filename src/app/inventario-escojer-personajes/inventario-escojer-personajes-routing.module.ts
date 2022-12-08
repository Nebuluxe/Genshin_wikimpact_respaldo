import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventarioEscojerPersonajesPage } from './inventario-escojer-personajes.page';

const routes: Routes = [
  {
    path: '',
    component: InventarioEscojerPersonajesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventarioEscojerPersonajesPageRoutingModule {}
