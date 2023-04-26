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

// Selección de las tasas de conversión

let pln = 1.0;
let eur = 4.44;
let usd = 3.95;
let resultado;

// Reinicio del formulario

form.addEventListener("reset", () => {
console.log("El formulario ha sido reiniciado.");
});

// Conversión de moneda en los campos

currencyFrom.addEventListener("input", () => {

    // Selección de las monedas para el resumen

    let currencyNameFrom = selectFrom.value;
    let currencyNameTo = selectTo.value;

    currencyNameTextFrom.innerText = `${currencyNameFrom}` + " equals";
    currencyNameTextTo.innerText = `${currencyNameTo}`;

    // Conversión y asignación de la cantidad

    if (currencyFrom.value != 0 || currencyFrom.value != "") {

        switch (selectFrom.value) {
            case "PLN":
            resultado = +currencyFrom.value * pln;
            break;
            case "EUR":
            resultado = +currencyFrom.value * eur;
            break;
            case "USD":
            resultado = +currencyFrom.value * usd;
            break;
        }
        
        switch (selectTo.value) {
            case "PLN":
            resultado /= pln;
            break;
            case "EUR":
            resultado /= eur;
            break;
            case "USD":
            resultado /= usd;
            break;
        }
        
        currencyTextFrom.innerText = currencyFrom.value;
        currencyTo.value = resultado.toFixed(2);
        currencyTextTo.innerText = resultado.toFixed(2);

    } 
    else {
            
        currencyTextTo.innerText = 0;
        currencyTextFrom.innerText = 0;
    }
});

currencyTo.addEventListener("input", () => {

    // Selección de las monedas para el resumen
    
    let currencyNameFrom = selectFrom.value;
    let currencyNameTo = selectTo.value;
    
    currencyNameTextFrom.innerText = `${currencyNameFrom}`;
    currencyNameTextTo.innerText = `${currencyNameTo}`;
    
    // Asignación de la cantidad en el texto
    
    if (currencyTo.value != 0 || currencyTo.value != "") {

        switch (selectTo.value) {
            case "PLN":
              resultado = +currencyTo.value * pln;
              break;
            case "EUR":
              resultado = +currencyTo.value * eur;
              break;
            case "USD":
              resultado = +currencyTo.value * usd;
              break;
        }
          
          switch (selectFrom.value) {
            case "PLN":
              resultado /= pln;
              break;
            case "EUR":
              resultado /= eur;
              break;
            case "USD":
              resultado /= usd;
              break;
        }
    
        currencyTextTo.innerText = currencyTo.value;
        currencyFrom.value = result.toFixed(2);
        currencyTextFrom.innerText = result.toFixed(2);

    } 
    else {

        currencyTextTo.innerText = 0;
        currencyTextFrom.innerText = 0;
    }
});

