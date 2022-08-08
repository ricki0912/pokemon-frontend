import { environment } from "src/environments/environment";

export class Helper{
    static getUrlImagePokemon=(id:number)=> environment.API_POKEMON_IMG+id+'.png'
}