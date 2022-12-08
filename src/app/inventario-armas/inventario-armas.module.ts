import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InventarioArmasPageRoutingModule } from './inventario-armas-routing.module';

import { InventarioArmasPage } from './inventario-armas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InventarioArmasPageRoutingModule
  ],
  declarations: [InventarioArmasPage]
})
export class InventarioArmasPageModule {}
