import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventarioBestiarioPage } from './inventario-bestiario.page';

const routes: Routes = [
  {
    path: '',
    component: InventarioBestiarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventarioBestiarioPageRoutingModule {}
