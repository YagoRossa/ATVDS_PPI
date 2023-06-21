// Função para converter algarismos romanos em números decimais
function converterAlgarismoRomano() {
  var algarismoRomano = document.getElementById("inAlgarismo").value.toUpperCase();
  var numeroDecimal = 0;

  for (var i = 0; i < algarismoRomano.length; i++) {
    var atual = charToDecimal(algarismoRomano.charAt(i));
    var proximo = charToDecimal(algarismoRomano.charAt(i + 1));

    if (proximo) {
      if (atual >= proximo) {
        numeroDecimal += atual;
      } else {
        numeroDecimal += (proximo - atual);
        i++;
      }
    } else {
      numeroDecimal += atual;
    }
  }

  document.getElementById("outResultado").innerHTML = numeroDecimal;
}

// Função auxiliar para converter caracteres romanos em números decimais
function charToDecimal(caractere) {
  switch (caractere) {
    case 'I':
      return 1;
    case 'V':
      return 5;
    case 'X':
      return 10;
    case 'L':
      return 50;
    case 'C':
      return 100;
    case 'D':
      return 500;
    case 'M':
      return 1000;
    default:
      return 0;
  }
}

// Evento de clique do botão "Converter"
document.getElementById("btConverter").addEventListener("click", converterAlgarismoRomano);