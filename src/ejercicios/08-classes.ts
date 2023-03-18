
class PersonaNormal {
   
    constructor(
        public nombre: string,
        public direccion: string
    ) {}
}

class Heroe extends PersonaNormal {

    constructor(
        public alterEgo: string, //Solo visible en la clase
        public edad: number, //Se puede ver fuera de la clase
        public nombreReal: string //Se puede acceder al valor sin crear una instancia
    ) {
        super(nombreReal, 'New York');
    }
}

const ironman = new Heroe('IronMan', 45, 'Tony Stark');
//const spiderman
console.log(ironman);