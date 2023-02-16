'use strict';
import {add,inm,} from './main.js';
import salutaaa from './main.js';
let x = 10;
let y = 15;


let suma = add (x,y);
let produs = inm(x,y);
function salut (m){
    return 'salut ' + m;
}

console.log(`Suma numerelor ${x} si ${y}`,suma);
console.log(`Produsul numerelor ${x} si ${y}`,produs);
let buna = salut('Ion');
console.log(buna);
let sal = salutaaa('Vasile');
console.log(sal);