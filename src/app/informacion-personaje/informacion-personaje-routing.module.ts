import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformacionPersonajePage } from './informacion-personaje.page';

const routes: Routes = [
  {
    path: '',
    component: InformacionPersonajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformacionPersonajePageRoutingModule {}
