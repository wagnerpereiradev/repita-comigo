/* 1 - Escreva um algoritmo para ler 2 valores informados pelo usuário e
se o segundo valor informado for ZERO, deve ser lido um novo valor, ou seja,
para o segundo valor não pode ser aceito o valor zero nem negativo e imprimir
o resultado da divisão do primeiro valor lido pelo segundo valor lido. */

function exercicio1() {

    var numbA1 = prompt("Digite um número qualquer: ");
    var numbA2 = prompt("Digite um número qualquer: ");

    while (numbA2 == 0 || numbA2 < 0) {
        numbA2 = prompt("Digite um número qualquer: ");
    }

    let div1 = document.querySelector("#ex1");
    div1.innerText = ("O resultado da divisão do primeiro valor lido pelo segundo valor lido é: ") + (numbA1 / numbA2);
}

/* 2 - Crie uma bomba relógio (usando somente código - para deixar claro!)
cuja contagem regressiva vá de 30 a 0. Utilize "document.write" para
escrever em tela e no final da repetição escreva "EXPLOSÃO". */

var hh = 0;
var mm = 0;
var ss = 30;

var tempo = 1000;
var cron;


function start() {
    ss = 30;
    cron = setInterval(() => { timer(); }, tempo);
}

function stop() {
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById('counter').innerText = '00:00:00';
}


function timer() {
    ss--;

    if (ss == 0) {
        document.getElementById('ex2').innerText = ("💥BOOOOOM!!!");
        stop();
    }

    var format = ('00:00:') + (ss < 10 ? '0' + ss : ss);

    document.getElementById('ex2').innerText = ("A bomba irá explodir em: ") + format;

    return format;
}

/* 3 - Escreva um algoritmo para imprimir os números de 1 (inclusive)
a 10 (inclusive) em ordem decrescente. */

function exercicio3() {

    for (let contagem3 = 10; contagem3 >= 0; contagem3--) {
        alert(contagem3);
    }
}

/* 4 - Faça um algoritmo que calcule e escreva a média aritmética dos
números inteiros entre 15 (inclusive) e 100 (inclusive). */

function exercicio4() {

    var soma = 0;

    for (var contador4 = 15; contador4 <= 100; contador4++) {
        soma = soma + contador4;
    }

    document.getElementById('ex4').innerText = ("A média dos números inteiros entre 15 e 100 é igual a: " + (storage / 85).toFixed(3));

}

/* 5 - Faça um algoritmo que calcule e escreva a média aritmética dos
números inteiros informados pelo usuário. Considere que o primeiro
sempre será menor que o segundo. */

function exercicio5() {

    var numero1 = parseInt(prompt("Digite um número:"));
    var numero2 = parseInt(prompt("Digite outro número:"));

    if (numero2 < numero1) {
        var correcao = parseInt(prompt("Digite um número menor que o primeiro:"));
        var media1 = (numero1 + correcao) / 2;

        document.getElementById('ex5').innerText = ("A média ficou " + media1)
    } else {
        var media2 = (numero1 + numero2) / 2;

        document.getElementById('ex5').innerText = ("A média ficou " + media2)
    }




}

/* 6 - Escreva um programa para ler 2 notas de um aluno, calcular e imprimir a média final.
Considere que a nota de aprovação é 9,5. Logo após escrever a mensagem "Calcular a média de
outro aluno Sim/Não?" e solicitar um resposta. Se a resposta for "S", o programa deve ser
executado novamente, caso contrário deve ser encerrado exibindo a quantidade de alunos aprovados. */

function exercicio6() {



}

/* 7 - Ler dois valores e imprimir uma das três mensagens a seguir:
‘Números iguais’, caso os números sejam iguais
‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
‘Segundo maior’, caso o segundo seja maior que o primeiro. */

function exercicio7() {
    var numbB1 = parseInt(prompt("Digite um número qualquer:"));
    var numbB2 = parseInt(prompt("Digite outro número diferente:"));

    if (numbB1 == numbB2) {
        document.getElementById('ex7').innerText = ("Os números são iguais!")
    }

    if (numbB1 > numbB2) {
        document.getElementById('ex7').innerText = ("O primeiro é maior!")
    } else if (numbB2 > numbB1) {
        document.getElementById('ex7').innerText = ("O segundo é maior!")
    }
}

/* 8 - Escreva um algoritmo para ler as notas da 1a. e 2a. avaliações de
um aluno, calcule e imprima a média (simples) desse aluno. Só devem ser
aceitos valores válidos durante a leitura (0 a 10) para cada nota.
Caso o valor informado para qualquer uma das notas esteja fora do
limite estabelecido, deve ser solicitado um novo valor ao usuário. */

function exercicio8() {

    var av1 = parseInt(prompt("1/2 - Digite a nota da primeira avaliação:"))
    var av1correct = 0;

    if (av1 < 0 || av1 > 10) {
        var av1correct = parseInt(prompt("1/2 - Digite um valor de 0 a 10:"));
        var av1 = 0;
    }

    var av2 = parseInt(prompt("2/2 - Digite a nota da segunda avaliação:"))
    var av2correct = 0;

    if (av2 < 0 || av2 > 10) {
        var av2correct = parseInt(prompt("2/2 - Digite um valor de 0 a 10:"));
        var av2 = 0;
    }

    media = (av1 + av1correct + av2 + av2correct) / 2;

    document.getElementById('ex8').innerText = ("A média ficou " + media)


}

/* 9 - Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive)
e N (inclusive). Considereque o N será sempre maior que ZERO.
N  é um valor informado pelo usuário */

function exercicio9() {

    var n = prompt("Digite um valor abaixo: ");
    var arrayStor = [];
    var contArray = 0;

    if (n > 0) {
        for (let counter01 = 1; counter01 <= n; counter01++) {
            arrayStor.splice((contArray), 0, (" " + counter01));
            contArray = contArray + 1;
        }

        document.getElementById('ex9').innerText = (arrayStor)

    } else {
        var n2 = prompt("Digite um valor maior que 0: ");
        var arrayStor2 = [];
        var contArray2 = 0;

        for (let counter011 = 1; counter011 <= n2; counter011++) {
            arrayStor2.splice((contArray2), 0, (" " + counter011));
            contArray2 = contArray2 + 1;

            document.getElementById('ex9').innerText = (arrayStor2)
        }

    }
}

/* 10 - Escreva um algoritmo que calcule e imprima a tabuada do 8 (de 1 a 10). */

function exercicio10() {

    var n10 = 10;
    var arrayStor10 = [];
    var contArray10 = 0;

    for (let counter10 = 1; counter10 <= n10; counter10++) {
        arrayStor10.splice((contArray10), 0, (" " + counter10 * 8));
        contArray10 = contArray10 + 1;
    }


    document.getElementById('ex10').innerText = (arrayStor10)

}

/* 11 - Escreva um algoritmo para imprimir os 10 primeiros números inteiros maiores que 100. */

function exercicio11() {

    var n100 = parseInt(10);
    var arrayStor100 = [];
    var contArray100 = 0;

    for (let counter100 = 1; counter100 <= n100; counter100++) {
        arrayStor100.splice((contArray100), 0, (" " + (counter100 + parseInt(100))));
        contArray100 = contArray100 + 1;
    }


    document.getElementById('ex11').innerText = (arrayStor100)


}

/* 12 - Escreva um algoritmo que calcule e imprima a tabuada do número informado pelo usuário (de 1 a 10). */

function exercicio12() {

    var tabuada = parseInt(prompt("Digite um número para ver sua tabuada (de 1 a 10):"));
    var n101 = 10;
    var arrayStor101 = [];
    var contArray101 = 0;

    for (let counter101 = 1; counter101 <= n101; counter101++) {
        arrayStor101.splice((contArray101), 0, (" " + counter101 * tabuada));
        contArray101 = contArray101 + 1;
    }


    document.getElementById('ex12').innerText = (arrayStor101)



}

/* 13 - Escreva um programa para imprimir todas as tabuadas de 1 a N. N será informado pelo usuário. */

function exercicio13() {

    var tabuada = parseInt(prompt("Digite um número que será fator da tabuada:"));
    var range = parseInt(prompt("Digite até qual número essa tabuada será calculada:"));
    var arrayStor102 = [];
    var contArray102 = 0;

    for (let counter102 = 1; counter102 <= range; counter102++) {
        arrayStor102.splice((contArray102), 0, (" " + counter102 * tabuada));
        contArray102 = contArray102 + 1;
    }


    document.getElementById('ex13').innerText = (arrayStor102)





}

/* 14 - Escreva um programa em que o usuário informe 10 valores e escreva quantos desses valores
lidos estão entre os números 24 e 42 (incluindo os valores 24 e 42) e quantos deles estão fora
deste intervalo. */

function exercicio14() {

    var arrayIntervalo = [];
    var arrayOut = [];
    var intervalo = 0;
    var counterOut = 0;

    for (let counter103 = 1; counter103 <= 10; counter103++) {
        var numbC1 = prompt(counter103 + "/10 - Digite um número:");

        if (numbC1 >= 24 && numbC1 <= 42) {
            arrayIntervalo.push(" " + numbC1);
            intervalo++;
        } else {
            arrayOut.push(" " + numbC1);
            counterOut++;
        }
    }

    document.getElementById('ex14').innerText = ("São " + intervalo + ", dentro do intervalo (24 a 42): " + arrayIntervalo + " | São " + counterOut + ", fora do intervalo: " + arrayOut);



}