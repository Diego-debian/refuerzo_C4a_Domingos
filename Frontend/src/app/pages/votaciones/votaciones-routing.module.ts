import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VotacionesComponent } from './votaciones.component';

const routes: Routes = [
  {
    path:'home/:usuario',
    component:VotacionesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VotacionesRoutingModule { }
