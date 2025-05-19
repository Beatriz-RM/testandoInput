function exibirNome(){
    let nome = document.getElementById('nomeInput').value;
    if(nome==="subzero" || nome==="SubZero" || nome==="Sub-Zero" || nome==="sub-zero" || nome==="Subzero" || nome==="subZero"){
        document.getElementById('mensagem').innerHTML="Você acertou o meu personagem, parabéns!!!";
    }
    else{
        document.getElementById('mensagem').innerHTML="Que pena, você errou..."
    }
}

function limpar(){
    document.getElementById('nomeInput').value=" ";
    document.getElementById('mensagem').innerHTML=" ";
}

