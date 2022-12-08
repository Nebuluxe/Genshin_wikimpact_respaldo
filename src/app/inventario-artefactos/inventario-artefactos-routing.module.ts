import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventarioArtefactosPage } from './inventario-artefactos.page';

const routes: Routes = [
  {
    path: '',
    component: InventarioArtefactosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventarioArtefactosPageRoutingModule {}
