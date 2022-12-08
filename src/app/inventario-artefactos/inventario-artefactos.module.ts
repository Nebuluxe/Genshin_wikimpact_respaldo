import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InventarioArtefactosPageRoutingModule } from './inventario-artefactos-routing.module';

import { InventarioArtefactosPage } from './inventario-artefactos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InventarioArtefactosPageRoutingModule
  ],
  declarations: [InventarioArtefactosPage]
})
export class InventarioArtefactosPageModule {}
