let cadenaTexto = prompt("Escriba una cadena de texto sin números ni carácteres especiales");
let mayusculas = 0;
let minusculas = 0;
cadenaTextoComprobar = cadenaTexto.replaceAll(" ", "")

for(let i = 0; i < cadenaTextoComprobar.length; i++){
    if(cadenaTextoComprobar.charAt(i) == cadenaTextoComprobar.charAt(i).toUpperCase()){
        console.log("M " + cadenaTextoComprobar.charAt(i))
        mayusculas++;
    }else{
        console.log("m " + cadenaTextoComprobar.charAt(i))
        minusculas++;
    }
}
if(mayusculas == cadenaTextoComprobar.length){
    alert(cadenaTexto + " tiene todo mayusculas");
}else if(minusculas == cadenaTextoComprobar.length){
    alert(cadenaTexto + " tiene todo minúsculas");
}else{
    alert(cadenaTexto + " tiene minúsculas y mayúsculas");
}

