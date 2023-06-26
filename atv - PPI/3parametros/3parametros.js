// Função para adicionar uma palavra em determinados índices de uma frase
function adicionarPalavra(frase, palavra, indices) {
  // Converte a string de índices para um array de números
  var listaIndices = indices.split(",").map(Number);

  // Variável para armazenar a nova frase
  var novaFrase = "";

  // Percorre cada caractere da frase
  for (var i = 0; i < frase.length; i++) {
    // Verifica se o índice atual está na lista de índices
    if (listaIndices.includes(i)) {
      // Se sim, adiciona a palavra à nova frase
      novaFrase += palavra;
    }

    // Adiciona o caractere atual da frase à nova frase
    novaFrase += frase[i];
  }

  // Verifica se o índice 0 está na lista de índices
  if (listaIndices.includes(0)) {
    // Se sim, adiciona a palavra antes da nova frase,
    // removendo a primeira ocorrência da palavra na nova frase
    novaFrase = palavra + novaFrase.substr(palavra.length);
  }

  // Retorna a nova frase resultante
  return novaFrase;
}

// Função para gerar a saída na página HTML
function gerarSaida() {
  // Obtém os valores dos campos de entrada
  var frase = document.getElementById("fraseInput").value;
  var palavra = document.getElementById("palavraInput").value;
  var indices = document.getElementById("indicesInput").value;

  // Chama a função para adicionar a palavra na frase
  var saida = adicionarPalavra(frase, palavra, indices);

  // Atualiza o elemento de saída na página HTML
  document.getElementById("saida").textContent = "Saída: " + saida;
}