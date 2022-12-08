import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventarioEscogerArtefactosPage } from './inventario-escoger-artefactos.page';

const routes: Routes = [
  {
    path: '',
    component: InventarioEscogerArtefactosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventarioEscogerArtefactosPageRoutingModule {}
