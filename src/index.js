import './css/styles.css';

const refs = {
    button: document.querySelector('.button-test'),
    input: document.querySelector('#search-box'),
}

const DEBOUNCE_DELAY = 300;




//  function fetchCountry(countryName) {fetch(`https://restcountries.com/v3.1/name/${countryName}?fields=name,capital,population,flags,languages;`)
//     .then(r => r.json()).then(data => {
//         console.dir(data[0])
//     });
// };
name(1);

function name(x) {
    console.log(`name is ${x}`)
};


