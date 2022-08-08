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
export class PokemonService {
  private API_POKEMON = `${environment.API_POKEAPI}`

  constructor(
    private https:HttpClient
  ) { 

  }
  all(offset:number, limit:number):Observable<Respuesta>{
    return this.https.get<Respuesta>(`${this.API_POKEMON}/pokemones`, {params:{offset, limit}})
  }

  find(id:number):Observable<DetallePokemon>{
    return this.https.get<DetallePokemon>(`${this.API_POKEMON}/pokemones/${id}`, )
  }

  getEvolutionChain(id:number):Observable<EvolutionPokemon>{
    return this.https.get<EvolutionPokemon>(`${this.API_POKEMON}/pokemones/evolution-chain/${id}`)
  }


}
