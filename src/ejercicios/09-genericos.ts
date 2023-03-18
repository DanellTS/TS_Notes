
function queTipoSoy<T>(argumento: T) {
    return argumento;
}

let soyString = queTipoSoy('Hola Mundo');
let soyNumber = queTipoSoy(100);
let soyArreglo = queTipoSoy([1,2,3,4,5]);
let soyExplicit = queTipoSoy<number>(100);



