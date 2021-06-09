//Aula 04 - 08/06/2021
//Calculadora

let somar = function(n1,n2){
    return n1+n2;
}

let subtrair = function(n1,n2){
    return n1-n2;
}

let multiplicar = function(n1,n2){
    return n1*n2
}

let dividir = function (n1,n2){
    //verificar se n2 == 0
    if(n2==0){
        //se for true
        return "Impossível fazer a divisão por 0"
    } else 
        return n1/n2;
}

console.log(dividir(65,5));