import { Component, Input } from '@angular/core';
import { Receta } from '../receta-clase';
import { InfoRecetaService } from '../info-receta.service';


@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent {
  recetas:Array<Receta>=[];
  @Input() j:number=0;
  constructor(private info:InfoRecetaService){
    this.recetas=info.ListaRecetas;
  }
}
