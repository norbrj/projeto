document.querySelector("parcelamento").onfocus = function () {
                        
  var comboCidades = document.getElementById("parcelamento");
  while (comboCidades.length) {
      comboCidades.remove(0);
      }
                      
  const parcelas = document.querySelector('#valor').value;
  
  const mparcelamento = ["A vista"];
  for (let indice=2; indice < 13; indice++)
  {       let valor = (parcelas/indice).toFixed(2);
          let conteudo = indice < 10 ? `0${indice} x R$ ${valor}`:`${indice} x R$ ${valor}`;
          mparcelamento.push(conteudo);
  }
  const select4 = document.getElementById("parcelamento");
  for (let parcelamento of mparcelamento)
      select4.options[select4.options.length] = new Option(parcelamento);
}


//function setResultado (msg, isValid) {
document.querySelector("parcelamento").onfocus = function () {

const resultado = document.querySelector("parcelamento");
    
    function criaP () {
      const p = document.createElement('li');
      return p;
    }

    resultado.innerHTML = '';

  const p = criaP();

  if (isValid) {
    p.classList.add('paragrafo-resultado');
  } else {
    p.classList.add('bad');
  }

  p.innerText = "teste";
  resultado.appendChild(p);
//}
};