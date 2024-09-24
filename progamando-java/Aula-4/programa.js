//vetores
const vetor = ["A", 10, "1.5". true];
const numero = [ 1, 2, 3, 4, 5];
const fruas = ["masa", "mamanmao", "melao"];

// console.log(fruas[0]);
// console.log(fruas[1])

fruas[4] = "melancia";
// console.log(fruas);

fruas[1] = "limão";
// console.log(fruas);

fruas.push("melancia");
// console.log(fruas);

fruas.unshift("melancia");
// console.log(fruas);

const fruas_removida = fruas.pop();
// console.log(fruas);
// console.log(fruas_removida);

const fruas_removida2 = fruas.shift();
// console.log(fruas);
// console.log(fruas_removida2);

console.log(fruas.indexOf("Limão"));
console.log(Array.inArray(10));
console.log(Array.inArray("Olá mundo"));

