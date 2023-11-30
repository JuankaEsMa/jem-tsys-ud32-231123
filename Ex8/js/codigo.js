let numero = prompt("Escribe un número");

const isImpar = (numeroEntero) => !!(numeroEntero%2)

if(isImpar(numero)){
    alert("El número és impar");
}else{
    alert("El número és par")
}