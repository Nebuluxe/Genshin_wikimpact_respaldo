import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InventarioEscojerPersonajesPageRoutingModule } from './inventario-escojer-personajes-routing.module';

import { InventarioEscojerPersonajesPage } from './inventario-escojer-personajes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InventarioEscojerPersonajesPageRoutingModule
  ],
  declarations: [InventarioEscojerPersonajesPage]
})
export class InventarioEscojerPersonajesPageModule {}
