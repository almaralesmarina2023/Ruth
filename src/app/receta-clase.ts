export class Receta{
    nombre:string;
    preparacion:string[];
    img:string;
    info:string;
    ingredientes:[string,string][];

    constructor(nombre:string, img:string, preparacion:string[], info:string, ingredientes:[string,string][]){
        this.nombre=nombre;
        this.preparacion=preparacion;
        this.img=img;
        this.info=info;
        this.ingredientes=ingredientes;

    }
}