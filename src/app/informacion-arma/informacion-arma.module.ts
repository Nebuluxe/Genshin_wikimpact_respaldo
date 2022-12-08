import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformacionArmaPageRoutingModule } from './informacion-arma-routing.module';

import { InformacionArmaPage } from './informacion-arma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformacionArmaPageRoutingModule
  ],
  declarations: [InformacionArmaPage]
})
export class InformacionArmaPageModule {}
