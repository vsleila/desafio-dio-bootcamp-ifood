//Desafio 1 - Classificador

    let nomeHeroi = "Nesuko Kamado";
    let saldoDeVitorias;
    let nivel = 10000;

        if (saldoDeVitorias < 1.000){
            saldoDeVitorias = "Ferro";
        } else if ((saldoDeVitorias >= 1001) && (saldoDeVitorias <= 2000)){
            saldoDeVitorias = "Bronze";
        } else if ((saldoDeVitorias >= 2001) && (saldoDeVitorias <= 5000)){
            saldoDeVitorias = "Prata";
        } else if ((saldoDeVitorias >= 6001) && (saldoDeVitorias <= 7000)){
            saldoDeVitorias = "Ouro";
        } else if ((saldoDeVitorias >= 7001) && (saldoDeVitorias <= 8000)){
            saldoDeVitorias = "Platina";
        } else if ((saldoDeVitorias >= 8001) && (saldoDeVitorias <= 9000)){
            saldoDeVitorias = "Ascendente";
        } else if ((saldoDeVitorias >= 9001) && (saldoDeVitorias <= 10000)){
            saldoDeVitorias = "Imortal";
        } else if (saldoDeVitorias >= 10001){
            saldoDeVitorias = "Radiante";
        }

    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + saldoDeVitorias);