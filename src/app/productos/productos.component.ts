import { Component, OnInit } from '@angular/core';
import {Pelicula} from '../pelicula';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  peliculas: Pelicula[]=[];
  constructor() { }

  ngOnInit() {
    this.peliculas.push(new Pelicula('Parasitos','Suspenso','Bong Joon-ho','18 de octubre 2019'))
    this.peliculas.push(new Pelicula('Los hermanos Sisters','Accion','Patrick DeWitt','10 de septiembre 2019'))
    this.peliculas.push(new Pelicula('Érase una vez en Hollywood','Suspenso','Hermanos Ruso','9 de agosto 2019'))
    this.peliculas.push(new Pelicula('La favorita','Drama','John Pich','4 de Julio 2019'))
    this.peliculas.push(new Pelicula('Nosotros','Accion','Hels Junk','24 de Junio 2019'))
    this.peliculas.push(new Pelicula('Ad Astra','Comedia','Tedd Olivers','22 de Junio 2019'))
    this.peliculas.push(new Pelicula('John Wick 3','Accion','Perk Jurs','12 de Junio 2019'))
    this.peliculas.push(new Pelicula('Nacion Salvaje','Comedia','Codd llips','18 de Mayo 2019'))
    this.peliculas.push(new Pelicula('Vengadores: Endgame','Accion','Hermanos Russo','26 de abril 2019'))
    this.peliculas.push(new Pelicula('Dolor y Gloria','Accion','Todd Phillips','22 de marzo 2019'))
    console.log(this.peliculas)
  }

}





