import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path:'',
    component:PagesComponent
  },
  {
    path:'seguridad',
    loadChildren:()=>import('./seguridad/seguridad.module').then(m=>m.SeguridadModule)
  },
  {
    path:'votaciones',
    loadChildren:()=>import('./votaciones/votaciones.module').then(m=>m.VotacionesModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }