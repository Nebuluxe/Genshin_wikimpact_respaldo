import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventarioFormacionEquipoPage } from './inventario-formacion-equipo.page';

const routes: Routes = [
  {
    path: '',
    component: InventarioFormacionEquipoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventarioFormacionEquipoPageRoutingModule {}
