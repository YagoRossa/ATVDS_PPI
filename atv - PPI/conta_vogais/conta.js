// criar referencias aos elementos da pagina 
const frm = document.querySelector("form");
const resp = document.querySelector("pre");
const respsoma = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    //evita o envio do formulario
    e.preventDefault();
    console.log("e.target.value");
    // obter os valores dos inputs

    let letras = ["A", "E", "I", "O", "U"];
    let contas = [0, 0, 0, 0, 0];

    const frase = String(frm.inFrase.value);

    if (frase.split(" ").length > 3) {

        for (let i = 0; i <= frase.length; i++) {
            var letra = frase[i];
            
            if (letras.includes(letra)){
                for (let b = 0; b < letras.length; b++) {
                    const element = letras[b];

                    if (element == letra){
                        contas[b] += 1;
                        break;
                    }
                }
            }
        }

        var res = "";

        for (let i = 0; i < 5; i++) {
            res += letras[i] + " repete " + contas[i] + " vez(s) \n"
            
        }
        resp.innerHTML = res
} else{
    resp.innerHTML = "Escreva pelo menos 4 palavras"
}
});