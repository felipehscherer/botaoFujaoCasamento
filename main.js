function fugir() {
    var botaoNao = document.getElementById("nao")

    var largularJanela = window.innerWidth - botaoNao.offsetWidth;
    var alturaJanela = window.innerHeight - botaoNao.offsetHeight;

    var randomX = Math.floor(Math.random() * largularJanela);
    var randomY = Math.floor(Math.random() * alturaJanela);

    botaoNao.style.left = randomX + "px";
    botaoNao.style.top = randomY + "px";
}

function aceitar() {
    alert("Parabens, agora você é minha esposa!")
}