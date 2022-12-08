import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformacionElementoPageRoutingModule } from './informacion-elemento-routing.module';

import { InformacionElementoPage } from './informacion-elemento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformacionElementoPageRoutingModule
  ],
  declarations: [InformacionElementoPage]
})
export class InformacionElementoPageModule {}
