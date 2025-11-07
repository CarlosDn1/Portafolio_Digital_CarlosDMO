let palabras = "gato perro elefante"
let animales = palabras.split(" ");

console.log(animales)






/*
import assert from 'assert';


function cantidadDigitos(num) {
    let numString = num.toString();
    
    return numString.length;
}

assert.strictEqual(cantidadDigitos(0), 1);
assert.strictEqual(cantidadDigitos(123), 3);
assert.strictEqual(cantidadDigitos(1234), 4);

console.log(cantidadDigitos(123));



let frase = "reconocer";
let esPalindromo = true;

for(let x = 0; x < Math.floor(frase.length/2); x++){
    if(frase[x] != frase[frase.length-1-x]){
        esPalindromo = false;
        break;
    } 
    
}

console.log(esPalindromo)
*/