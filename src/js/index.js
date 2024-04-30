/*
    Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html

        Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele

        Passo 2 - identificar o clique no botão
        
        Passo 3 - adicionar a classe "ativo" nos projetos escondidos

    Objetivo 2 - esconder o botão de mostrar mais
        Passo 1 - pegar o botão e esconder ele
*/

// Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html

// Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
    // Passo 3 - adicionar a classe "ativo" nos projetos escondidos
    mostrarMaisProjetos();

    // Objetivo 2 - esconder o botão de mostrar mais
    // Passo 1 - pegar o botão e esconder ele
    esconderBotao();
});

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}


//O efeito de fazer com que elementos apareçam gradualmente enquanto você rola para baixo em uma página da web
function mostrarElementosAoRolar() {
    var elementos = document.querySelectorAll('.fade-in');
  
    elementos.forEach(function(elemento) {
      var posicaoElemento = elemento.getBoundingClientRect().top;
      var alturaJanela = window.innerHeight;
  
      if (posicaoElemento < alturaJanela) {
        elemento.classList.add('aparecer');
      }
    });
  }
  
  mostrarElementosAoRolar();
  
  window.addEventListener('scroll', mostrarElementosAoRolar);

   // Função para avançar o carrossel
   function nextSlide() {
    const radios = document.querySelectorAll('input[name="position"]');
    let checkedIndex;
    radios.forEach((radio, index) => {
      if (radio.checked) {
        checkedIndex = index;
        radio.checked = false;
      }
    });
    const nextIndex = (checkedIndex + 1) % radios.length;
    radios[nextIndex].checked = true;
  }

  // Avança o carrossel a cada 10 segundos
  setInterval(nextSlide, 10000);
  
  