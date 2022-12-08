import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InventarioEquiposPageRoutingModule } from './inventario-equipos-routing.module';

import { InventarioEquiposPage } from './inventario-equipos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InventarioEquiposPageRoutingModule
  ],
  declarations: [InventarioEquiposPage]
})
export class InventarioEquiposPageModule {}
