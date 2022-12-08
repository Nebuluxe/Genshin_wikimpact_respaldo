import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformacionArtefactoPageRoutingModule } from './informacion-artefacto-routing.module';

import { InformacionArtefactoPage } from './informacion-artefacto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformacionArtefactoPageRoutingModule
  ],
  declarations: [InformacionArtefactoPage]
})
export class InformacionArtefactoPageModule {}
