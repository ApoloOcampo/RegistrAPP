import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuperarPage } from './recuperar.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperarPage
  },  {
    path: 'reestablecer',
    loadChildren: () => import('./reestablecer/reestablecer.module').then( m => m.ReestablecerPageModule)
  },
  {
    path: 'reestablecimiento-exitoso',
    loadChildren: () => import('./reestablecimiento-exitoso/reestablecimiento-exitoso.module').then( m => m.ReestablecimientoExitosoPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperarPageRoutingModule {}
