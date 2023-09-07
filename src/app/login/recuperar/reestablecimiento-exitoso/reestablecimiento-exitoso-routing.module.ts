import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReestablecimientoExitosoPage } from './reestablecimiento-exitoso.page';

const routes: Routes = [
  {
    path: '',
    component: ReestablecimientoExitosoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReestablecimientoExitosoPageRoutingModule {}
