// Incrementa
/* querySelectorAll - Busca todos os elementos no DOM (Document Object Model)
    que que tenham a classe .btn-incrementa
OBS: '#' indica que está buscando por um ID no próprio CSS */
var botoesIncrementa = document.querySelectorAll(".btn-incrementa");

/* Itera em uma lista de botões que retorna vários elementos e então 
         navega  nessa lista 
         OBS: cada item da lista botoesIncrementa, cria uma variável
           chamada botao, ou seja, cada item da lista terá o nome botao */
for (let botao of botoesIncrementa) {
  /* Captura o evento de clique no botão incrementa e informa que a função
    incrementa() deve ser executada quando este evento ocorrer.
    addEventListener - Permite passar dois parâmetros:
    1º - Informa qual evento há interesse em ouvir, nesse caso se quer o evento 
                  de 'click'
    2º - É a função que vai ser executada quando o evento ocorrer. Neste caso
      a função incrementa() */
  botao.addEventListener('click', incrementa);

  function incrementa() {
    /* Busca o item mais próximo do botão, neste trecho encontra o elemento
        que representa o item do pedido. No HTML este elemento é o tr */
    var item = botao.closest('.item');
    /* Busca dentro do elemento que contém a classe
        quantidade dentro do item */
    var input = item.querySelector('.quantidade');
    // Incrementa um valor
    input.value++;
    /* Executa a função pegaPrecoItem e passa o item como parâmetro 
       OBS: Esta função é especializada em buscar o preço de um item
         se este for passado como parâmetro */
    var preco = pegaPrecoItem(item);
    adicionaAoTotal(preco);

  }
}



// Decrementa
// document - É a representação do HTML no mundo JavaScript
/* querySelectorAll - Busca todos os elementos que tenham
    a classe .btn-decrementa no código HTML */
var botoesDecrementa = document.querySelectorAll(".btn-decrementa");
/* O let cria uma variável apenas dentro do escopo que ele foi definido, assim
variáveis que estão em outro escopo não são afetadas pela sua declaração */
for (let botao of botoesDecrementa) {
  /* addEventListener - Quando clicar no botão decrementa, será executada ' - '
       a função decrementa() */
  botao.addEventListener('click', decrementa);

  function decrementa() {
    /* Busca o elemento acima do botão incrementa que contém a classe item,
      esse elemento é o tr.
      closests - Função que busca um elemento que está acima na hierarquia, ou seja,
      elementos que são vizinhos ou estão abaixo na hierarquia do HTML, não serão
      selecionados */
    // OBS: closest é o elemento mais próximo, acima
    var item = botao.closest('.item');
    /* Busca o elemento que contém a quantidade. Aqui busca o elemento
           pela classe */
    var input = item.querySelector('.quantidade');
    /* Se a quantidade for maior que 0 */
    if (input.value > 0) {
      // Decrementa a quantidade do input
      input.value--;
      var preco = pegaPrecoItem(item);
      /* Passa o preço do item negativado, isto adiciona o operador "-"
           na frente da variável. Assim a função adicionarAoTotal receberá
             um valor negativo e o total será substraído */
      adicionaAoTotal(-preco);
    }
    else {
      console.log(input.value);
    }


  }
}

/* Busca o formulário com o nome pedido, ou seja, o formulário que possuir
  o atributo name com o valor pedido.
  document.forms - Aqui tem todos os formulários que estão no DOM, e assim
    da pra acessar o formulário que se deseja passando o seu nome como uma
    propriedade de forms */
var formPedido = document.forms.pedido;

/* Captura o evento submit do formulário e passa uma validação que será
 executada quando este evento ocorrer
 submit - Evento que ocorre quando o formulário é enviado 
 function(event) - Função que conterá a lógica que valida o formulário
 OBS: Está é uma função anônima dentro do método addEventListener.
 Por isso não foi dado um nome para esta função, já que ela não será
 invocada em outra parte do código.
 Esta função é criada apenas para resolver um problema */
formPedido.addEventListener('submit', function (event) {

  /* Variável que auxiliará na verificação dos inputs, se um input possuir valor
  maior que zero, este contador será incrementado em um */
  var contador = 0;

  /* Busca todos os inputs que possuem a classe quantidade, com a junção
    dois dois seletores (input.quantidade) pode-se diminuir as possibilidades
      para encontrar o elemento desejado */
  var inputs = formPedido.querySelectorAll("input.quantidade");

  // Iterando na lista de inputs
  for (let input of inputs) {
    /* Verifica se o input da lista possui o valor maior que zero
    OBS: Esta verificação acontecerá em todos os inputs */
    if (input.value > 0) {
      /* Inrementa o contador em um */
      contador++;
    }
  }

  /* Verifica se o contador está zerado */
  if (contador == 0) {
    /* Avisa ao usuário que o envio do formulário não foi possível, exibindo
      uma mensagem para que ele entenda que deve preencher as informações
        adequadamente */
    alert("Deve ter pelo menos 1 pizza no pedido");
    /* preventDefault() - Função para não permitir o envio do formulário,
  ou seja, previne o comportamento padrão, pois sempre que um botão é
   clicado dentro de um formulário, dispara o evento submit e se o contador
   for zero deve-se prevenir o comportameto padrão que é o envio deste formulário */
    event.preventDefault();
  }
});

// Funções auxiliares
/*  Cria a função pegarPreco, que recebe um parâmetro com o 
                  nome item */
function pegaPrecoItem(item) {
  /* Busca o elemento dentro do item que contém a classe preco-item
    querySelector - Para buscar abaixo e não acima. E já que está buscando
    a partir do item e não do document */
  var precoItem = item.querySelector('.preco-item');
  /* Number() - Pega o conteúdo do precoItem que é do tipo texto e o converte
                  para Number.
       return - Esta função devolve um resultado, que é o preço do item */
  return Number(precoItem.textContent);
}

/* adicionarAoTotal - Função que recebe um parâmetro chamado valor */
function adicionaAoTotal(valor) {
  /* Busca o elemento total no HTML, este elemento é único na view,
      por isso contêm o ID total */
  var elementoTotal = document.querySelector("#total");
  /* Já que precisa-se utilizar o parâmetro valor para calcular o total
      Converte o conteúdo do elemento total para number e depois soma
          com o parâmetro valor.
       Sempre que for passado um valor para este função, incrementa o total
         com esta quantidade */
  elementoTotal.textContent = valor + Number(elementoTotal.textContent);
}