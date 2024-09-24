// Operadore De Conparasão 

const a = 1;
const b = 2;

console.log(a < b)
console.log(a > b)
console.log(a <= b)
console.log(a >= b)
console.log(a == b)// 1(=) resebe é 2(=) iqual
console.log(a != b)//diferente(!=)

//Operadores Lógicos

// &&-> E
// ||-> ou
// ! Não (Revetre o valor)

true && true; true
true && false; false
false && true; false
false &&  false; false

console.log(a < b && a > b)
true && false
console.log(a < b && a != b)
true && true
console.log(a == b && a > b)
false && false

console.log(a < b || 1 > 2)
console.log(a == b || 1 != 2)
console.log(a == b || 1 > 2)

console.log(!true)
console.log(! a == b)