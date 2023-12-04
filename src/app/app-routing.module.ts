import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CaracteristicasComponent } from './caracteristicas/caracteristicas.component';
import { ListaDeResetasComponent } from './lista-de-resetas/lista-de-resetas.component';
import { RecetasComponent } from './recetas/recetas.component';
import { ContactosComponent } from './contactos/contactos.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { AppComponent } from './app.component';


const routes: Routes =[

  {path: 'caracterist', component:CaracteristicasComponent},
  {path: 'caracterist/:id', component: CaracteristicasComponent },
  {path: 'contactos', component:ContactosComponent},
  {path: 'quienes', component:QuienesSomosComponent},
  
]
  
@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)

  ],
  exports: [RouterModule]

})

export class AppRoutingModule { }
