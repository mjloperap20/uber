import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RutasRoutingModule } from './rutas-routing.module';
import { GetComponent } from './get/get.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    GetComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    RutasRoutingModule
  ]
})
export class RutasModule { }
