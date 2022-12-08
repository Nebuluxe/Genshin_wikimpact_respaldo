import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InventarioBestiarioPageRoutingModule } from './inventario-bestiario-routing.module';

import { InventarioBestiarioPage } from './inventario-bestiario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InventarioBestiarioPageRoutingModule
  ],
  declarations: [InventarioBestiarioPage]
})
export class InventarioBestiarioPageModule {}
