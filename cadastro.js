let cadastro_evento = [07, 09, 2021];
let cadastro_Hoje = [23, 08, 2021];
let idade = [70];

if((cadastro_evento[2] - cadastro_Hoje[2]) < 0){
    console.log("erro ,pois o Ano de hoje é posterior ao evento da melhor idade!!");
} else if ((cadastro_evento[1] - cadastro_Hoje[1]) < 0){
    console.log("erro ,pois o Mês de hoje é posterior ao evento da melhor idade!!");
} else if (((cadastro_evento[0] - cadastro_Hoje[0]) < 0) && ((cadastro_evento[1] - cadastro_Hoje[1]) == 0)){
    console.log("erro, pois o Dia de hoje é posterior ao evento da melhor idade!!");
} else {
    if(idade < 60){
        console.log("erro ,pois a idade é inferior a 60 anos.");
    } else {
        console.log("sucesso agora e só se divertir!!");
    }
} 