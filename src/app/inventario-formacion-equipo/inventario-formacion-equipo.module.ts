import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InventarioFormacionEquipoPageRoutingModule } from './inventario-formacion-equipo-routing.module';

import { InventarioFormacionEquipoPage } from './inventario-formacion-equipo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InventarioFormacionEquipoPageRoutingModule
  ],
  declarations: [InventarioFormacionEquipoPage]
})
export class InventarioFormacionEquipoPageModule {}
