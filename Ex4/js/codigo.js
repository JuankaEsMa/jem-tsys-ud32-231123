var valores = [true, 5, false, "hola", "adios", 2];

if(valores[3].length > valores[4].length){
    console.log("1- " + valores[3] + " és mayor que " + valores[4]);
}else if(valores[3].length < valores[4].length){
    console.log("1- " + valores[3] + " és menor que " + valores[4]);
}else{
    console.log("1- " + valores[3] + " y " + valores[4] + " tienen la misma longitud")
}

console.log(valores[0]&&valores[2]);
console.log(valores[0]||valores[2]);

let num1 = valores[1];
let num2 = valores[5];

console.log(num1 + " + " + num2 + " = " + (num1+num2));
console.log(num1 + " - " + num2 + " = " + (num1-num2));
console.log(num1 + " * " + num2 + " = " + num1*num2);
console.log(num1 + " / " + num2 + " = " + num1/num2);
console.log(num1 + " % " + num2 + " = " + num1%num2);