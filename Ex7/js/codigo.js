let numero = prompt("Escriba un número");
let resultado = numero;
for(let i = numero-1; i > 1; i--){
    resultado *= i;
}
alert("El resultado del factorial de " + numero + " és " + resultado);