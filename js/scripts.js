var contmaquete = document.getElementById("contmaquete");
var contflyer = document.getElementById("contflyer");
var contmateria = document.getElementById("contmateria");
var conttexto = document.getElementById("conttexto");
var contvideo = document.getElementById("contvideo");



contflyer.style.display = 'none';
contmaquete.style.display = 'none';
contmateria.style.display = 'none';
conttexto.style.display = 'none';
contvideo.style.display = 'none';

function mostraflyer() {
    if (contflyer.style.display == 'none') {
        contflyer.style.display = 'block';
    } else {
        contflyer.style.display = 'none';
    }
}


function mostramaquete() {
    if (contmaquete.style.display === 'none') {
        contmaquete.style.display = 'block';
    } else {
        contmaquete.style.display = 'none';
    }

}

function mostramateria() {
    if (contmateria.style.display === 'none') {
        contmateria.style.display = 'block';
    } else {
        contmateria.style.display = 'none';
    }

}

function mostratexto() {
    if (conttexto.style.display === 'none') {
        conttexto.style.display = 'block';
    } else {
        conttexto.style.display = 'none';
    }

}

function mostravideo() {
    if (contvideo.style.display === 'none') {
        contvideo.style.display = 'block';
    } else {
        contvideo.style.display = 'none';
    }

}