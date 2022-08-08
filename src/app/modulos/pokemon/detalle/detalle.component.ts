import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Helper } from 'src/app/helpers/helper';
import { DetallePokemon, FlavorTextEntry } from 'src/app/interfaces/detalle-pokemon';
import { Chain, EvolutionPokemon } from 'src/app/interfaces/evolution-pokemon';
import { EvolutionChainService } from 'src/app/services/evolution-chain.service';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
  id:number =0
  isLoading:boolean=false
  
  //detalle acerca de la información del pokemon
  detallePokemon?:DetallePokemon
  flavorTextEntries?:FlavorTextEntry[]

  //cadena de evolucion del pokemón
  evolutionChain?:EvolutionPokemon
  chain?:Chain[]=[]


  constructor(
    private _activatedRouted:ActivatedRoute,
    private _pokemonService:PokemonService,
    private _evolutionChainService:EvolutionChainService
  ) { }

  ngOnInit(): void {
    this.listenRoute(id=>{this.find(id);})
  }

  private listenRoute=(c:(o:any)=>void)=>{
    this._activatedRouted.params.subscribe(params=>{
      this.id=parseInt(params['id'] || 0)
      c(this.id)
    });
  }

  getUrlImg=(id:number)=>Helper.getUrlImagePokemon(id)

  private find=(id:number)=>{
    this.isLoading=true;
    this._pokemonService.find(id).subscribe({
      next:d=>{
        this.detallePokemon=d
        this.flavorTextEntries=this.filterFlavorTextEntries("es")//hola
        this.getEvolutionChain(d.evolution_chain.id)
        this.isLoading=false
      },
      error:e=>{
      }
    })
  }

  private getEvolutionChain=(id:number)=>{
    this.isLoading=true;
    this._evolutionChainService.find(id).subscribe({
      next: e=>{
        this.evolutionChain=e
        this.chain=[e.chain]
      },
      error:e=>{
        console.log(e.error.message)
      }
    })

  }

  /*Para obtener detalles en español */
  private  filterFlavorTextEntries=(lang:string)=>{
    return  this.detallePokemon?.flavor_text_entries.filter(e=>e.language.name==lang)
  }
}
