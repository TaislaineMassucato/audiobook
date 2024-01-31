const botaoPlayPause = document.getElementById("play-pause");
const botaoProximo = document.getElementById("proximo");
const botaoVoltar = document.getElementById("anterior");
const capitulo = document.getElementById("capitulo");
const audioCapitulo = document.getElementById("audio-capitulo"); 

const numeroCapitulos = 10;
let taTocando = 0;
let capituloAtual = 1;

function tocarFaixa() {
    audioCapitulo.play();
    botaoPlayPause.classList.remove("bi-play-circle-fill");
    botaoPlayPause.classList.add("bi-pause-circle-fill");
}
function pararFaixa() {
    audioCapitulo.pause();
    botaoPlayPause.classList.remove("bi-pause-circle-fill");
    botaoPlayPause.classList.add("bi-play-circle-fill");
}

function tocarOuPausar(){
    if(taTocando === 0){       
       tocarFaixa();
       taTocando = 1;
    }else{
       pararFaixa();
       taTocando = 0;
    }  
}
function trocarNomeFaixa(){
    capitulo.innerHTML = "Capitulo "+capituloAtual;
}
function proximaFaixa(){
    if(capituloAtual === numeroCapitulos){
        capituloAtual = 1;
    }else{
        capituloAtual = capituloAtual + 1
    }

    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
    trocarNomeFaixa()
    tocarFaixa();
}

function voltarFaixa(){
   if(capituloAtual === 1){
    capituloAtual = numeroCapitulos
   }else{
    capituloAtual = capituloAtual - 1
   }
    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
    trocarNomeFaixa()
    tocarFaixa();
}

 botaoPlayPause.addEventListener("click",tocarOuPausar);
 botaoProximo.addEventListener("click",proximaFaixa);
 botaoVoltar.addEventListener("click",voltarFaixa);