const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel() {
    idx ++;

    if(idx > img.length - 1){
        idx = 0;
    }

    imgs.style.transform = 'translateX('+(-idx * 1482)+'px)';
}

// só mudar o valor do número para poder alterar o tempo que demora para trocar de banner
setInterval(carrossel, 10000);

function mudarImagem(id, imagemNome) {
    document.getElementById(id).src=imagemNome;
}

function voltarImagem(id, imagemVolta) {
    document.getElementById(id).src=imagemVolta;
}