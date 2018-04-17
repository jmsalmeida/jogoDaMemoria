let frutas = ['abacate', 'banana', 'kiwi', 'maca'];

function frutaAleatoria(){
    let i = Math.floor(Math.random() * frutas.length);
    return frutas[i];
}

function trocaImagem(){
    let novaImagem = `${frutaAleatoria()}.jpeg`
    this.style = `background-image: url(img/${novaImagem})`;
    if(iguais()){
        console.log("ACERTOU");
    } 
}

let cartas = document.querySelectorAll(".carta");

for (let i = 0; i < cartas.length; i++){
    cartas[i].onclick = trocaImagem;
}

function iguais(){
    if (cartas[0].style.backgroundImage == 
        cartas[1].style.backgroundImage){
            return true;
        }
    return false;
}

function acertou(){
    
}
