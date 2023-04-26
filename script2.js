// Selección del formulario
let form = document.querySelector(".js-form");

// Selección de los campos de texto
let currencyFrom = document.querySelector(".js-currencyFrom");
let currencyTo = document.querySelector(".js-currencyTo");

// Selección de los selects
let selectFrom = document.querySelector(".js-selectFrom");
let selectTo = document.querySelector(".js-selectTo");

// Selección de los botones
let buttonConvert = document.querySelector(".js-convert");
let buttonReset = document.querySelector(".js-reset");

// Selección de los fragmentos de texto de resumen
let currencyTextFrom = document.querySelector(".js-currencyTextFrom");
let currencyTextTo = document.querySelector(".js-currencyTextTo");

let currencyNameTextFrom = document.querySelector(".js-currencyNameFromText");
let currencyNameTextTo = document.querySelector(".js-currencyNameToText");

// URL de la API de Fixer
let apiUrl = "https://api.apilayer.com/fixer/convert";

// Reinicio del formulario
form.addEventListener("reset", () => {
  console.log("El formulario ha sido reiniciado.");
});

// Función para realizar la conversión de moneda
function convertCurrency() {
  let fromCurrency = selectFrom.value;
  let toCurrency = selectTo.value;
  let amount = currencyFrom.value;

  // Construcción de la URL de la API
  let url = `${apiUrl}?from=${fromCurrency}&to=${toCurrency}&amount=${amount}`;

  // Configuración de los headers de la petición
  let headers = new Headers();
  headers.append("apikey", "fCt3V8qzepWbARFaMVs7u1Y4mvkLCDTr");

  // Configuración de las opciones de la petición
  let requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };

  // Llamada a la API
  fetch(url, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      let conversion = result.result;
      currencyTo.value = conversion.toFixed(2);
      currencyTextFrom.innerText = amount;
      currencyTextTo.innerText = conversion.toFixed(2);
    })
    .catch((error) => console.log("error", error));
}

// Eventos de entrada de texto
currencyFrom.addEventListener("input", () => {
  currencyNameTextFrom.innerText = selectFrom.value;
  currencyNameTextTo.innerText = selectTo.value;
  if (currencyFrom.value !== "") {
    convertCurrency();
  } else {
    currencyTo.value = "";
    currencyTextFrom.innerText = "0";
    currencyTextTo.innerText = "0";
  }
});

currencyTo.addEventListener("input", () => {
  currencyNameTextFrom.innerText = selectFrom.value;
  currencyNameTextTo.innerText = selectTo.value;
  if (currencyTo.value !== "") {
    convertCurrency();
  } else {
    currencyFrom.value = "";
    currencyTextFrom.innerText = "0";
    currencyTextTo.innerText = "0";
  }
});


function getExchangeRates() {
    // Obtener los elementos select
    const selectFrom = document.querySelector('.js-selectFrom');
    const selectTo = document.querySelector('.js-selectTo');
    
    // Realizar una solicitud AJAX a la API
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.exchangeratesapi.io/latest?base=EUR&access_key=fCt3V8qzepWbARFaMVs7u1Y4mvkLCDTr`);
    xhr.onload = function() {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        const rates = response.rates;
        
        // Crear opciones para los elementos select en función de los datos devueltos por la API
        for (const currency in rates) {
          const optionFrom = document.createElement('option');
          optionFrom.value = currency;
          optionFrom.textContent = currency;
          selectFrom.appendChild(optionFrom);
          
          const optionTo = document.createElement('option');
          optionTo.value = currency;
          optionTo.textContent = currency;
          selectTo.appendChild(optionTo);
        }
      }
    };
    xhr.send();
  }