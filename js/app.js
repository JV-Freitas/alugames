let jogosAlugados = [];

function alterarStatus(id) {
  let gameClicado = document.getElementById(`game-${id}`);
  let imagem = gameClicado.querySelector(".dashboard__item__img");
  let botao = gameClicado.querySelector(".dashboard__item__button");
  let nomeDoJogo = gameClicado.querySelector(".dashboard__item__name");
  let jogo = nomeDoJogo.textContent;

  if (imagem.classList.contains("dashboard__item__img--rented")) {
    let confirmacao = prompt(`Você deseja devolver o jogo ${jogo}`);
    if (
      confirmacao == "sim" ||
      confirmacao == "Sim" ||
      confirmacao == "SIM" ||
      confirmacao == "s"
    ) {
      imagem.classList.remove("dashboard__item__img--rented");
      botao.classList.remove("dashboard__item__button--return");
      botao.textContent = "Alugar";
    }
  } else {
    imagem.classList.add("dashboard__item__img--rented");
    botao.textContent = "Devolver";
    botao.classList.add("dashboard__item__button--return");

    jogosAlugados.push(jogo);
    console.log(jogosAlugados);
  }
}
