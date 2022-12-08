import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformacionArmaPage } from './informacion-arma.page';

const routes: Routes = [
  {
    path: '',
    component: InformacionArmaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformacionArmaPageRoutingModule {}
