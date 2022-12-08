import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformacionEnemigoPageRoutingModule } from './informacion-enemigo-routing.module';

import { InformacionEnemigoPage } from './informacion-enemigo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformacionEnemigoPageRoutingModule
  ],
  declarations: [InformacionEnemigoPage]
})
export class InformacionEnemigoPageModule {}
