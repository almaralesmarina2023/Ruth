import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CaracteristicasComponent } from './caracteristicas/caracteristicas.component';
import { ListaDeResetasComponent } from './lista-de-resetas/lista-de-resetas.component';
import { RecetasComponent } from './recetas/recetas.component';


const routes: Routes =[
  {path: '', component:ListaDeResetasComponent},
  {path: 'caracterist/:id', component: CaracteristicasComponent },
  
]
  
@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)

  ],
  exports: [RouterModule]

})

export class AppRoutingModule { }
