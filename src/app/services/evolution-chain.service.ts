import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DetallePokemon } from '../interfaces/detalle-pokemon';
import { EvolutionPokemon } from '../interfaces/evolution-pokemon';
import { Respuesta } from '../interfaces/respusta';

@Injectable({
  providedIn: 'root'
})
export class EvolutionChainService {
  private API_POKEMON = `${environment.API_POKEAPI}`

  constructor(
    private https:HttpClient
  ) { 

  }
 
  find(id:number):Observable<EvolutionPokemon>{
    return this.https.get<EvolutionPokemon>(`${this.API_POKEMON}/evolution-chain/${id}`)
  }


}
