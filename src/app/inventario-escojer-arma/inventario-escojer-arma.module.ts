import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InventarioEscojerArmaPageRoutingModule } from './inventario-escojer-arma-routing.module';

import { InventarioEscojerArmaPage } from './inventario-escojer-arma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InventarioEscojerArmaPageRoutingModule
  ],
  declarations: [InventarioEscojerArmaPage]
})
export class InventarioEscojerArmaPageModule {}
