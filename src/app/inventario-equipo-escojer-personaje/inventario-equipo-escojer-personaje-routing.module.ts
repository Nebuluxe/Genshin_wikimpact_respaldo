import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventarioEquipoEscojerPersonajePage } from './inventario-equipo-escojer-personaje.page';

const routes: Routes = [
  {
    path: '',
    component: InventarioEquipoEscojerPersonajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventarioEquipoEscojerPersonajePageRoutingModule {}
