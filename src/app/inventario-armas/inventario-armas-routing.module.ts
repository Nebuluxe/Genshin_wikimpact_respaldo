import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventarioArmasPage } from './inventario-armas.page';

const routes: Routes = [
  {
    path: '',
    component: InventarioArmasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventarioArmasPageRoutingModule {}
