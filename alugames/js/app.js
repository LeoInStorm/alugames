function alterarStatus(id){
    let jogo = document.getElementById(`game-${id}`);
    let imagem = jogo.querySelector('.dashboard__item__img');
    let botao = jogo.querySelector('.dashboard__item__button');
    let nomedojogo = jogo.querySelector('.dashboard__item__name')


    if (botao.classList.contains('dashboard__item__button--return'))
        {
            botao.classList.remove('dashboard__item__button--return');
            imagem.classList.remove('dashboard__item__img--rented');
            botao.innerHTML =`<a onclick="alterarStatus(${id})">Alugar</a>` ;
            alert('Você devolveu o jogo alugado! Muito Obrigado!')

        } 
      else
        {
            botao.classList.add('dashboard__item__button--return');
            imagem.classList.add('dashboard__item__img--rented');
            botao.innerHTML =`<a onclick="alterarStatus(${id})">Devolver</a>` ;
            console.log(`Você alugou o jogo ${nomedojogo.textContent}`)  
        }

}