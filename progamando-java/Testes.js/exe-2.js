//Exe1
let numero = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(let n = 0; n < numero.length; n++){
    console.log(numero[n]);
}

//Exe2 incompleto
for( let numero ; numero /= 2; numero++) {
    console.log(numero);
}

//Exe3

let numero = 0;

if (numero > 0) {
    console.log( numero,"seu numero é positivo")
}else if(numero < 0){
    console.log(numero,"seu numero é negativo")
}else if(numero == 0){
    console.log("Se numero é = 0(zero)")
}

//Exe4

const pessoa = {
    nome:"Pedro",
    idade: 18,
    cidade: "DF",
    profissao: "Programador"
}

console.log( "Meu nome é" , pessoa.none ,", tenho ", pessoa.idade,
     "anos e moro em", pessoa.cidade, ".");

//Exe5

let dados = "";
for (let x in pessoa){
   dados += pessoa[x] + "  ";
}
console.log(dados)