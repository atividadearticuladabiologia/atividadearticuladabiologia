var contmaquete = document.getElementById("contmaquete");
var contflyer = document.getElementById("contflyer");
var contmateria = document.getElementById("contmateria");
var conttexto = document.getElementById("conttexto");
var contvideo = document.getElementById("contvideo");
var contcredito = document.getElementById("contcred");
var background = document.getElementById("page");
var back = document.body;

contflyer.style.display = 'none';
contmaquete.style.display = 'none';
contmateria.style.display = 'none';
conttexto.style.display = 'none';
contvideo.style.display = 'none';
contcredito.style.display = 'none';

function mostraflyer() {
    if (contflyer.style.display == 'none') {
        contflyer.style.display = 'block';
    } else {
        contflyer.style.display = 'block';
    }
}


function mostramaquete() {
    if (contmaquete.style.display === 'none') {
        contmaquete.style.display = 'block';
    } else {
        contmaquete.style.display = 'block';
    }

}

function mostramateria() {
    if (contmateria.style.display === 'none') {
        contmateria.style.display = 'block';
    } else {
        contmateria.style.display = 'block';
    }

}

function mostratexto() {
    if (conttexto.style.display === 'none') {
        conttexto.style.display = 'block';
    } else {
        conttexto.style.display = 'block';
    }

}

function mostravideo() {
    if (contvideo.style.display === 'none') {
        contvideo.style.display = 'block';
    } else {
        contvideo.style.display = 'block';
    }

}

function mostracredito() {
    if (contcredito.style.display=='none'){
        contcredito.style.display='block';
    } else {
        contcredito.style.display ='block';
    }
}

/*function modoescuro(params) {
    if (back.style.backgroundColor!='black'){
        back.style.backgroundColor='#222423';
    }
}*/