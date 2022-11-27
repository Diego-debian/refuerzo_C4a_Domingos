import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HeadhomeModule } from './headhome/headhome.module';
import { SeguridadModule } from './seguridad/seguridad.module';


@NgModule({
  declarations: [
    PagesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HeadhomeModule,
    SeguridadModule
  ],
  exports:[PagesComponent]
})
export class PagesModule { }
