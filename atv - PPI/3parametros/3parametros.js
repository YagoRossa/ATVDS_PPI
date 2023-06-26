function adicionarPalavra(frase, palavra, indices) {
    // Converte a string de índices para uma array de números
    var listaIndices = indices.split(",").map(function(indice) {
      return parseInt(indice.trim());
    });
  
    // Inicializa o contador de caracteres
    var contador = 0;
  
    // Verifica se os índices estão dentro dos limites da frase
    if (Math.max(...listaIndices) > frase.length) {
      return "Erro: índice fora dos limites da frase.";
    }
  
    // Itera pelos caracteres da frase e adiciona a palavra nos índices indicados
    var novaFrase = "";
    for (var i = 0; i < frase.length; i++) {
      // Verifica se o contador está em um dos índices indicados
      if (listaIndices.includes(contador)) {
        novaFrase += palavra;
      }
      novaFrase += frase[i];
  
      // Incrementa o contador de caracteres
      contador++;
  
      // Verifica se o caractere atual é um espaço em branco
      if (frase[i] === " ") {
        // Adiciona a palavra nos índices após o espaço em branco, exceto se o índice anterior já tiver sido adicionado
        if (listaIndices.includes(contador) && !listaIndices.includes(contador - 1)) {
          novaFrase += palavra;
        }
      }
    }
  
    // Retorna a nova frase
    return novaFrase;
  }
  
  function gerarSaida() {
    // Obtém os valores dos campos de entrada
    var frase = document.getElementById("fraseInput").value;
    var palavra = document.getElementById("palavraInput").value;
    var indices = document.getElementById("indicesInput").value;
  
    // Chama a função para gerar a saída
    var saida = adicionarPalavra(frase, palavra, indices);
  
    // Atualiza o elemento de saída
    document.getElementById("saida").textContent = "Saída: " + saida;
  }