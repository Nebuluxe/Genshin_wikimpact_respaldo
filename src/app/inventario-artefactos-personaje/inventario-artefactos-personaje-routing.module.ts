import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventarioArtefactosPersonajePage } from './inventario-artefactos-personaje.page';

const routes: Routes = [
  {
    path: '',
    component: InventarioArtefactosPersonajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventarioArtefactosPersonajePageRoutingModule {}
