import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventarioArmaPersonajePage } from './inventario-arma-personaje.page';

const routes: Routes = [
  {
    path: '',
    component: InventarioArmaPersonajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventarioArmaPersonajePageRoutingModule {}
