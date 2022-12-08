import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimuladorDeseosPage } from './simulador-deseos.page';

const routes: Routes = [
  {
    path: '',
    component: SimuladorDeseosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SimuladorDeseosPageRoutingModule {}
