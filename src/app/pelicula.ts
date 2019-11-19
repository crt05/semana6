export class Pelicula {
    
    pelicula : string;
    genero: string;
    director: string;
    anio: string;


    constructor (
        pelicula: string,
        genero: string,
        director: string, 
        anio: string)
         {
        this.pelicula = pelicula;
        this.genero = genero;
        this.director = director;
        this.anio = anio;
    }
}