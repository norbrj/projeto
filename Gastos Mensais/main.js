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


//let select1 = document.getElementById("Categoria");
//for (let categoria of mcategoria)
  //   select1.options[select1.options.length] = new Option(categoria);

//const mdono = ["Licia","Marcos"];
//let select2 = document.getElementById("Dono");
//for (let Dono of mdono)
  //   select2.options[select2.options.length] = new Option(Dono);

//const mpagamento = ["Original","Inter","C6","Nubank","Picpay"];
//let select3 = document.getElementById("pagamento");
//for (let pagamento of mpagamento)
//    select3.options[select3.options.length] = new Option(pagamento);


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
  const select4 = document.getElementById("parcelamento");
  for (let parcelamento of mparcelamento)
      select4.options[select4.options.length] = new Option(parcelamento);
}

valor.addEventListener('focusout', () => preenchecombo());


//comboparcelamento.addEventListener('mousedown', () => preenchecombo());

