var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

let dni = prompt("Escriba su dni sin letra");
let letraDniUsuario = prompt("Escriba la letra de su Dni");
let letraDniCalculada;

if(dni < 0 || dni > 99999999 ){
    alert("Dni no válido")
}else{
    letraDniCalculada = letras[dni%23];
    if(letraDniCalculada != letraDniUsuario.toUpperCase()){
        alert("La letra indicada no es correcta");
    }else{
        alert("el número y la letra de DNI son correctos")
    }
}