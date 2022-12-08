import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InventarioEscogerArtefactosPageRoutingModule } from './inventario-escoger-artefactos-routing.module';

import { InventarioEscogerArtefactosPage } from './inventario-escoger-artefactos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InventarioEscogerArtefactosPageRoutingModule
  ],
  declarations: [InventarioEscogerArtefactosPage]
})
export class InventarioEscogerArtefactosPageModule {}
