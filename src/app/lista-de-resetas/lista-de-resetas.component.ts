import { Component } from '@angular/core';
import { Receta } from '../receta-clase';
import { InfoRecetaService } from '../info-receta.service';


@Component({
  selector: 'app-lista-de-resetas',
  templateUrl: './lista-de-resetas.component.html',
  styleUrls: ['./lista-de-resetas.component.css']
})
export class ListaDeResetasComponent {
  

  constructor(public info:InfoRecetaService ){
    
  }
  
}
