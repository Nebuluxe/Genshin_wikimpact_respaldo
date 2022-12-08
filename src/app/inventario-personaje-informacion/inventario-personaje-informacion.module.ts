import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InventarioPersonajeInformacionPageRoutingModule } from './inventario-personaje-informacion-routing.module';

import { InventarioPersonajeInformacionPage } from './inventario-personaje-informacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InventarioPersonajeInformacionPageRoutingModule
  ],
  declarations: [InventarioPersonajeInformacionPage]
})
export class InventarioPersonajeInformacionPageModule {}
