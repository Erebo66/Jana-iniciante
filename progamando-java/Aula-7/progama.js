// //EStrutura de reretisão

// //whille é uma estrutura de controle

// let contador = 0;
// // while (contador < 3) {
// //     console.log("mia");
// //     contador ++;
// // }

// // for(let i = 0; i < 10; i++){
// //     console.log("Número da repetição for:" + i);
// // }

// const tarefas = [
//     {
//         id:0,
//         texto: "tira o lixo",
//         completo: false,
//     },
//     {
//         id: 1,
//         texto:"jantar com a esposa",
//         completo: false,
//     },
//     {
//         id: 2,
//         texto:"Reuniao com o chefe",
//         completo: true,
//     },
// ];

// for (let i = 0; i < tarefas.length; i++){
//     console.log("Tarefas, " + tarefas[i].id + ":" + tarefas[i].texto);
// }

//Funções seta (Arrow Funtion)

const dizer_oi = () => console.log("oi")
dizer_oi();
const dizer_oi_tudo_bem = () => {
    console.log("Oi");
    console.log("Tudo bem?");
}

dizer_oi_tudo_bem();

const somar = (x, y) => {
    return x + y;
}

const resultado = somar(10, 15);

console.log(resultado)