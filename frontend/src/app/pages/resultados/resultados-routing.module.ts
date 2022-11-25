import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCandidatoComponent } from './candidatos/crear-candidato/crear-candidato.component';
import { ListarCandidatoComponent } from './candidatos/listar-candidato/listar-candidato.component';
import { CrearComponent } from './mesas/crear/crear.component';
import { ListarComponent } from './mesas/listar/listar.component';
import { CrearpartidoComponent } from './partidos/crearpartido/crearpartido.component';
import { ListarpartidoComponent } from './partidos/listarpartido/listarpartido.component';
import { ResultadosComponent } from './resultados.component';

const routes: Routes = [
  {
    path:"mesasListar",
    component:ListarComponent
  },
  {
    path:"mesasCrear",
    component:CrearComponent
  },
  {
    path:"mesasEditar/:id_mesa",
    component:CrearComponent
  },
  {
    path:"regresar",
    component:ResultadosComponent
  },
  {
    path:"partidosListar",
    component:ListarpartidoComponent
  },
  {
    path:"partidosCrear",
    component:CrearpartidoComponent
  },
  {
    path:"partidosEditar/:id_partido",
    component:CrearCandidatoComponent
  },
  {
    path:"candidatosListar",
    component:ListarCandidatoComponent
  },
  {
    path:"candidatosCrear",
    component:CrearpartidoComponent
  },
  {
    path:"candidatosEditar/:id_partido",
    component:CrearpartidoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultadosRoutingModule { }
