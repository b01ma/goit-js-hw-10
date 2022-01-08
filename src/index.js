import './css/styles.css';

const refs = {
    button: document.querySelector('.button-test'),
    input: document.querySelector('#search-box'),
}

const DEBOUNCE_DELAY = 300;

let countryInput = "";

refs.input.addEventListener('input', onInput);
refs.button.addEventListener('click', onClickEvent);

function onClickEvent(event) {
    // console.log(countryInput);
    fetchCountry(countryInput);
}

function onInput(event) {
    // console.dir(event.currentTarget.value);
    countryInput = event.currentTarget.value
}

function fetchCountry(countryInput) {fetch(`https://restcountries.com/v3.1/name/${countryInput}?fields=name,capital,population,flags,languages;`)
    .then(r => r.json()).then(data => {
        console.dir(data[0])
    });
};