import { Component, OnInit, Input } from '@angular/core';
import {Pelicula} from '../pelicula';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() mensaje: string;
  @Input() peliculas1:Pelicula[]=[];

  constructor() { }

  ngOnInit() {
    this.mensaje="Listado de las ultimas peliculas"
    this.peliculas1.push(new Pelicula('Parasitos','Suspenso','Bong Joon-ho','18 de octubre 2019'))
  }

}
