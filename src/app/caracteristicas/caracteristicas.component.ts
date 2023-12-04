import { Component} from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { Receta } from '../receta-clase';
import { InfoRecetaService } from '../info-receta.service';

@Component({
  selector: 'app-caracteristicas',
  templateUrl: './caracteristicas.component.html',
  styleUrls: ['./caracteristicas.component.css']
})
export class CaracteristicasComponent {
  id:number=-1;
  
 
  constructor(private route: ActivatedRoute,public info:InfoRecetaService){   
    this.route.params.subscribe(params =>{
      this.id = parseInt(params ['id']) ;
    });
  
    
    
  

   

  }

    
}
