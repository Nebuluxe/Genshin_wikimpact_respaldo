import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformacionElementoPage } from './informacion-elemento.page';

const routes: Routes = [
  {
    path: '',
    component: InformacionElementoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformacionElementoPageRoutingModule {}
