import { Producto, calculaISV } from './06-destructuracion-funcion';


const carritoCompras: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 100
    },
    {
        desc: 'Telefono 1',
        precio: 150
    }
];


const [total, isv] = calculaISV(carritoCompras);

console.log('Total: ',total);
console.log('ISV: ',isv);