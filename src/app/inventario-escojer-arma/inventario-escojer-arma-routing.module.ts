import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventarioEscojerArmaPage } from './inventario-escojer-arma.page';

const routes: Routes = [
  {
    path: '',
    component: InventarioEscojerArmaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventarioEscojerArmaPageRoutingModule {}
