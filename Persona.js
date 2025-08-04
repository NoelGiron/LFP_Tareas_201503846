class Persona{
    constructor(nombre, apellido, id){
        this._nombre = nombre
        this._apellido = apellido
        this._id = id
    }

    get nombre(){
        return this._nombre;
    }

    get apellido(){
        return this._apellido;
    }

    get id(){
        return this._id;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    set id(id){
        this._id = id;
    }
    
    identificar = () => {
        return console.log(`Nombre: ${this._nombre} Apellido: ${this._apellido} ID: ${this._id}`)
    }
}

let persona1 = new Persona("Juan","Perez", 2398023);
console.log(persona1.nombre);
persona1.nombre = "Carlos";
console.log(persona1.nombre);

let persona2 = new Persona("Carlos", "Leon", 674523);
persona2.identificar();