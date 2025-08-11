// Valores da moeda 
const dolar = 5.43;
const libra = 7.30;
const euro =  6.33;

// Pegando valores elementos
const amount = document.getElementById("amount");
const form = document.querySelector("form");
const currency = document.getElementById("currency");

// Pegando e criando o footer
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");


// Validando e pegando apenas numeros
amount.addEventListener("input", function() {
  let value = amount.value;
  let validatorRegex = /\D+/g; // Quero que apenas tenha numeros.
  value.replace(validatorRegex, "");
 })


 // Como eu nao quero apenas o botao, quero que o enter funcione vamos usar o form para isso.

 form.onsubmit = function(event) {
    event.preventDefault();
    switch (currency.value) {
      case "USD":
        convertCurrency(amount.value, dolar, "US$")
        break;
      case "EUR": 
        convertCurrency(amount.value, euro, "€")
        break
      case "GBP": 
        convertCurrency(amount.value, libra, "£")
        break
    }
 }

 function convertCurrency(amount, price, symbols) {
    try {
      description.textContent = `${symbols} ${amount} = R$ ${brNumberFormatting(price)}`;
      let total = amount * price;

      if(isNaN(total)) {
        alert("Digite corretamente o valor")
      }

      total = brNumberFormatting(total).replace("R$", "");
      result.textContent = `${total} Reais`;
      footer.classList.add("show-result");
    } catch (error) {
      console.log(error);
      footer.classList.remove("show-result");
      alert("Nao e possivel fazer a conversao. Tente mais tarde!");
    }
 }

// Formatando numero flutuante com 0.0 para 0,0 (reais brasileiro);

function brNumberFormatting(value) {
  return Number(value).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  })
}