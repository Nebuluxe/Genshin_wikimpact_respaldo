import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InventarioEquipoEscojerPersonajePageRoutingModule } from './inventario-equipo-escojer-personaje-routing.module';

import { InventarioEquipoEscojerPersonajePage } from './inventario-equipo-escojer-personaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InventarioEquipoEscojerPersonajePageRoutingModule
  ],
  declarations: [InventarioEquipoEscojerPersonajePage]
})
export class InventarioEquipoEscojerPersonajePageModule {}
