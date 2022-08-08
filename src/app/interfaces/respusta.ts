import { Pokemon } from "./pokemon";

export interface Respuesta{
    count:number,
    next:string,
    previous:string,
    results:Pokemon[]
}