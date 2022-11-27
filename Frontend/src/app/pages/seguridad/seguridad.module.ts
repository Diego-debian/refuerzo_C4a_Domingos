import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { SeguridadComponent } from './seguridad.component';
import { HeadhomeModule } from '../headhome/headhome.module';
import { FormulariologinComponent } from './formulariologin/formulariologin.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SeguridadComponent,
    FormulariologinComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    HeadhomeModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    FormsModule

  ],
  exports:[SeguridadComponent]
})
export class SeguridadModule { }
