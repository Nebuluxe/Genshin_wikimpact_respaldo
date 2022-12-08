import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformacionEnemigoPage } from './informacion-enemigo.page';

const routes: Routes = [
  {
    path: '',
    component: InformacionEnemigoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformacionEnemigoPageRoutingModule {}
