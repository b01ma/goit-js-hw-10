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
    fetchCountry(countryInput).then(data => {
        console.dir(data)

        console.log(data.length);

        if (data.length > 1) {

            console.log('more then 1')

            const countryList = data.map(country => country.name.official);
            console.log(countryList);

            return
        } 
        
        console.log('only one');

        const countryData = {

            officialName: data[0].name.official,
            flag: data[0].flags.svg,
            capital: data[0].capital,
            population: data[0].population,
            languages: data[0].languages,
        }

        console.log(countryData);

    });; 
}

function onInput(event) {
    // console.dir(event.currentTarget.value);
    countryInput = event.currentTarget.value
}

function fetchCountry(country) {
     return fetch(`https://restcountries.com/v3.1/name/${country}?fields=name,capital,population,flags,languages;`)
    .then(r => r.json());
};