import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { SeguridadModule } from './seguridad/seguridad.module';
import { ResultadosModule } from './resultados/resultados.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PagesComponent,

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SeguridadModule,
    ResultadosModule,
    FormsModule
  ],
  exports:[PagesComponent]
})
export class PagesModule { }
