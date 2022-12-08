import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InventarioArmaPersonajePageRoutingModule } from './inventario-arma-personaje-routing.module';

import { InventarioArmaPersonajePage } from './inventario-arma-personaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InventarioArmaPersonajePageRoutingModule
  ],
  declarations: [InventarioArmaPersonajePage]
})
export class InventarioArmaPersonajePageModule {}
