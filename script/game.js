/*Variaveis de controle do jogo*/

var perguntasFeitas = [];

//perguntas do jogo
const perguntas = [
    {
        pergunta: "Qual dessas linguagens não é considerada uma linguagem de programação?  ",
        respostas: ["PHP", "Javascript", "C++", "HTML"],
        correta: "resp3"
    },
    {
        pergunta:"Em que ano o Brasil foi descoberto?",
        respostas:["1498", "1500", "1375", "1828"],
        correta: "resp1"
    },
    {
        pergunta:"Oque significa HTML?",
        respostas: ["Hyper Tonto Maluco Legal", "Hyper Text Markup Language", "Hyper Trade More Language", "Hyper Text Mark Lang"],
        correta: "resp1"
    },
    {
        pergunta: "Quais dessas linguagens é considerada uma linguagem de marcação?",
        respostas: ["HTML", "Javascript", "C++", "PHP"],
        correta: 'resp0'
    }

];

var qtdPerguntas = perguntas.length - 1;

gerarPergunta(qtdPerguntas);


function gerarPergunta(maxPerguntas){
    let aleatorio = (Math.random() * maxPerguntas).toFixed();
    aleatorio = Number(aleatorio);
    console.log("A pergunta sorteada foi a " + aleatorio);

    if(!perguntasFeitas.includes(aleatorio)){
        perguntasFeitas.push(aleatorio);


        var p_selecionada = perguntas[aleatorio].pergunta;
        

        $("#pergunta").html(p_selecionada);

        //respostas
        for(var i=0; i<4; i++){
            $("#resp" + i).html(perguntas[aleatorio].respostas);
        }
    


    //Embaralhar as respostas
        var pai = $("#respostas");
        var botoes = pai.children();

       for (var i = 1; i < botoes.length; i++) {
            pai.append(botoes.eq(Math.floor(Math.random() * botoes.length)));
        } 
    }else{
        console.log('A  pergunta já foi feita. Sorteando novamente...')
        if(perguntasFeitas.length < qtdPerguntas +1){
            return gerarPergunta(maxPerguntas);
        }else{
            console.log('Acabaram as perguntas')
        }
    }
};
