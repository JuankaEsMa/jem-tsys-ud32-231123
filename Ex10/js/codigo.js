let cadenaTexto = prompt("Escriba una cadena de texto sin números ni carácteres especiales");
let isPolindromo = true;
let cadenaTextoComprobar = cadenaTexto.replaceAll(" ", "");
for(let i = 0; cadenaTextoComprobar.length > i; i++){
    if(!(cadenaTextoComprobar.charAt(i).toLowerCase() == cadenaTextoComprobar.charAt(cadenaTextoComprobar.length-1-i).toLowerCase())){
        console.log(cadenaTextoComprobar.charAt(i) + " != " + cadenaTextoComprobar.charAt(cadenaTextoComprobar.length-1-i))
        isPolindromo = false;
    }
}
if(isPolindromo){
    console.log("Es polindromo");
}else{
    console.log("No es políndromo");
}

