import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventarioEquiposPage } from './inventario-equipos.page';

const routes: Routes = [
  {
    path: '',
    component: InventarioEquiposPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventarioEquiposPageRoutingModule {}
