function verificarTriangulo (){

    //criar referências ao elementos da pagina
    var inladoA = document.getElementById("inladoA");
    var inladoB = document.getElementById("inladoB");
    var inladoC = document.getElementById("inladoC");
    var outSimNao = document.getElementById("outSimNao");
    var outTipo = document.getElementById("outTipo");

    //obter os valores digitados

    ladoA = Number(inladoA.value);
    ladoB = Number(inladoB.value);
    ladoC = Number(inladoC.value);

     // if e else basico
    if ( ladoA > ladoB + ladoC ||
        ladoB > ladoA + ladoC || ladoC > ladoA + ladoB  ){
            outSimNao.textContent = " os lados não podem formar um triangulo"

        
    } else {
        outSimNao.textContent = " os lados podem formar um triangulo "
        
        if ( ladoA == ladoB && ladoA == ladoC) {
            outTipo.textContent = " Tipo equilátero "
            outTipo.style.color = "red"
        } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {

            outTipo.textContent = "Tipo isóceles"
            outTipo.style.color = "blue"
        } else {
            outTipo.textContent = "Tipo escaleno"
            outTipo.style.color = "green"
        }
    }

}
// função botão
    var btVerificar = document.getElementById("btVerificar");
    btVerificar.addEventListener("click", verificarTriangulo);