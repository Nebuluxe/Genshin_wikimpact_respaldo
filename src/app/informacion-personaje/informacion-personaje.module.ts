import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformacionPersonajePageRoutingModule } from './informacion-personaje-routing.module';

import { InformacionPersonajePage } from './informacion-personaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformacionPersonajePageRoutingModule
  ],
  declarations: [InformacionPersonajePage]
})
export class InformacionPersonajePageModule {}
