import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadhomeRoutingModule } from './headhome-routing.module';
import { HeadComponent } from './head/head.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { BodyComponent } from './body/body.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    HeadComponent,
    BodyComponent
  ],
  imports: [
    CommonModule,
    HeadhomeRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    FormsModule
  ],
  exports:[
    HeadComponent,
    BodyComponent
  ]
})
export class HeadhomeModule { }
