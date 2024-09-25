//Futios

 function dizer_ola(nome = Fulano){
    console.log(" Olá " + nome);
}
dizer_ola(" Elyab ");

function se_apresentar(nome, idade){
    console.log("Meu nome é " +nome+  " tenho " +idade+ " anos.")
}
se_apresentar("Maria", 25)

function criar_nome_completo(nome, sobrenome, sexo){
    if (sexo == "M"){
        return "Sr."+ nome +" " + sobrenome;
    }else if (sexo == "F"){
        return "Sra."+ nome +" " + sobrenome;
    } else{
        return  nome +" " + sobrenome;
    }
}
const nomeConmpleto =  criar_nome_completo("Elya", "Lucas", "M");
const nomeConmpleto2 =  criar_nome_completo("Mari", "Marci", "F");

dizer_ola(nomeConmpleto);
dizer_ola(nomeConmpleto2);