import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VotacionesRoutingModule } from './votaciones-routing.module';
import { VotacionesComponent } from './votaciones.component';
import { HeadhomeModule } from '../headhome/headhome.module';
import { BodyvotacionesComponent } from './bodyvotaciones/bodyvotaciones.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    VotacionesComponent,
    BodyvotacionesComponent
  ],
  imports: [
    CommonModule,
    VotacionesRoutingModule,
    HeadhomeModule,
    MatCardModule,
    MatButtonModule,
    FormsModule
  ],
  exports:[VotacionesComponent]
})
export class VotacionesModule { }
