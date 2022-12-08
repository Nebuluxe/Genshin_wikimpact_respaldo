import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroDiarioPageRoutingModule } from './registro-diario-routing.module';

import { RegistroDiarioPage } from './registro-diario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroDiarioPageRoutingModule
  ],
  declarations: [RegistroDiarioPage]
})
export class RegistroDiarioPageModule {}
