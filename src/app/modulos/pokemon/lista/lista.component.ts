import { ChangeDetectionStrategy, Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Helper } from 'src/app/helpers/helper';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],

})
export class ListaComponent implements OnInit {
  public isLoading:boolean=false
  public  pokemones:Pokemon[]=[]
  private offset:number=0;
  private limit:number=20;
  constructor(
    private _pokemonService:PokemonService
  ) { }

  ngOnInit(): void {
    this.all()
  }

  all=()=>{
    this.isLoading=true;
    this._pokemonService.all(this.offset, this.limit).subscribe({
      next: (d)=>{
          this.pokemones.push(...d.results)
          this.offset=this.offset+this.limit
          this.isLoading=false
      }, 
      error:e=>{
        console.log(e)
    }})
  }

  getUrlImg=(id:number)=>Helper.getUrlImagePokemon(id)


  @HostListener("window:scroll", ["$event"])
    onWindowScroll() {
    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;
    if(pos == max )   {
      this.all()
        
     }
    }

}
