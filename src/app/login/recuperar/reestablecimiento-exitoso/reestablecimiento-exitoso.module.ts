import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReestablecimientoExitosoPageRoutingModule } from './reestablecimiento-exitoso-routing.module';

import { ReestablecimientoExitosoPage } from './reestablecimiento-exitoso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReestablecimientoExitosoPageRoutingModule
  ],
  declarations: [ReestablecimientoExitosoPage]
})
export class ReestablecimientoExitosoPageModule {}
