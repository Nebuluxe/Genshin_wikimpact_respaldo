import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InventarioPersonajesPageRoutingModule } from './inventario-personajes-routing.module';

import { InventarioPersonajesPage } from './inventario-personajes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InventarioPersonajesPageRoutingModule
  ],
  declarations: [InventarioPersonajesPage]
})
export class InventarioPersonajesPageModule {}
