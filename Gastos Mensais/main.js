function parcelas() {
  const parcelas = document.querySelector("valor");
      
  const mparcelamento = ["A vista",parcelas,"1x","2x","3x","4x","5x","6x","7x","8x","9x","10x","11x","12x"];
  const select4 = document.getElementById("parcelamento");
  for (let parcelamento of mparcelamento)
      select4.options[select4.options.length] = new Option(parcelamento);

}