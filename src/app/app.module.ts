import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProductosComponent } from './productos/productos.component';
import { ContactoComponent } from './contacto/contacto.component';

	
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './lista/lista.component';

const rutas: Routes = [
  { path: 'home', component: HomeComponent },
 { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NosotrosComponent,
    ProductosComponent,
    ContactoComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      rutas,
      { enableTracing: true }) // <-- tareas de debug
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
