import { Injectable } from '@angular/core';
import { Receta } from './receta-clase';

@Injectable({
  providedIn: 'root'
})
export class InfoRecetaService {
  ListaRecetas:Array<Receta>=[];


  constructor() { 
    
    this.ListaRecetas.push(new Receta("Pizza","./assets/pizza.jpg", "direccioninfo","Nivel medio",[["ing 1","ing 2"]]));
    this.ListaRecetas.push(new Receta("Empanadas","./assets/empanada.jpg", "direccioninfo","Nivel medio",[["ing 1","ing 2"]]));
    this.ListaRecetas.push(new Receta("Batido de helado","./assets/batido de helado.jpg", "direccioninfo","Nivel medio",[["ing 1","ing 2"]]));
    
  }
}
