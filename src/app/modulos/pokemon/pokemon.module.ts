import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { ListaComponent } from './lista/lista.component';
import { DetalleComponent } from './detalle/detalle.component';
import { PokemonComponent } from './pokemon.component';
import {MatCardModule} from '@angular/material/card';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button'
import {MatMenuModule} from '@angular/material/menu'




@NgModule({
  declarations: [
    PokemonComponent,
    ListaComponent,
    DetalleComponent,
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ]
})
export class PokemonModule { }
