import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InventarioArtefactosPersonajePageRoutingModule } from './inventario-artefactos-personaje-routing.module';

import { InventarioArtefactosPersonajePage } from './inventario-artefactos-personaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InventarioArtefactosPersonajePageRoutingModule
  ],
  declarations: [InventarioArtefactosPersonajePage]
})
export class InventarioArtefactosPersonajePageModule {}
