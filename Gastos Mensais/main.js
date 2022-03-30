const valor = document.querySelector('#valor');
const comboparcelamento = document.querySelector('#parcelamento');

const mcategoria = ["Arthur","Agua","Mercado","Lazer","Carro","Feira","Fármacia","Agua","Padaria"];
const mdono = ["Licia","Marcos"];
const mpagamento = ["Original","Inter","C6","Nubank","Picpay"];

function limpacombo () {
  const comboparcelas = document.getElementById("parcelamento");
  while (comboparcelas.length) {
      comboparcelas.remove(0);
  }
}

function criacombo(elemento, array) {

  let selecao = document.getElementById(elemento);
  for (let linha of array)
      selecao.options[selecao.options.length] = new Option(linha);
 
}

criacombo("Categoria",mcategoria);
criacombo("Dono",mdono);
criacombo("pagamento",mpagamento);


function preenchecombo()
{
  limpacombo();
  
  const parcelas = document.querySelector('#valor').value;

  const mparcelamento = ["A vista"];
  for (let indice=2; indice < 13; indice++)
  {       let valor = Number((parcelas/indice)).toFixed(2);
          let conteudo = indice < 10 ? `0${indice} x R$ ${valor}`:`${indice} x R$ ${valor}`;
          mparcelamento.push(conteudo);
  }
  criacombo("parcelamento",mparcelamento);
  
}



function criali () {

  const li = document.createElement('li');
  return li;
}

function limpali()
{



}
function lancaparcelas () 
{                        

    //alert("teste")
    
    const resultado = document.querySelector(".qtdParcelas");
    
    
    try {
      console.log("tentei");

      resultado.removeChild(li);
      console.log("tentei");

    } 
    catch (error) 
    
    {

      const li = criali();  
      li.innerText = comboparcelamento.value; //"teste";
      li.setAttribute('class','datas');
      resultado.appendChild(li);      

    }

}


valor.addEventListener('focusout', () => preenchecombo());
comboparcelamento.addEventListener('change', () => lancaparcelas());
