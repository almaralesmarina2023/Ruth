import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InfoRecetaService } from './info-receta.service';

import { AppComponent } from './app.component';
import { ListaDeResetasComponent } from './lista-de-resetas/lista-de-resetas.component';
import { RecetasComponent } from './recetas/recetas.component';
import { CaracteristicasComponent } from './caracteristicas/caracteristicas.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ContactosComponent } from './contactos/contactos.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component'


@NgModule({
  declarations: [
    AppComponent,
    ListaDeResetasComponent,
    RecetasComponent,
    CaracteristicasComponent,
    ContactosComponent,
    QuienesSomosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [InfoRecetaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
