import './css/styles.css';
import fetchCountry from './js/fetch';
import _ from "lodash";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
    input: document.querySelector('#search-box'),
    countryList: document.querySelector('.country-list'),
    countryInfo: document.querySelector('.country-info'),
}

const DEBOUNCE_DELAY = 300;
const debounceInput = _.debounce(onInput, DEBOUNCE_DELAY);

let countryInput = "";

refs.input.addEventListener('input', debounceInput);

function onInput(event) {
    refs.countryList.innerHTML = "";
    refs.countryInfo.innerHTML = "";

    countryInput = event.target.value.trim()

    console.log(countryInput);

    if (!countryInput) {
        // console.log("false")
        return
    }

    const options = ['name', 'capital', 'population', 'flags', 'languages'];

    fetchCountry(countryInput, options)
        .then(data => {
            // console.dir(data)
            if (data == undefined) {
                return
            }

            if (data.length > 10) {
                Notify.warning("Too many matches found. Please enter a more specific name.")
                return
            };

            if (data.length > 1) {
                countryListMarkUp(data);
                return
            }

            if (data.length = 1) {
                refs.countryList.innerHTML = "";

                const languages = languagesToList(data);

                const countryData = {

                    officialName: data[0].name.official,
                    flag: data[0].flags.svg,
                    capital: data[0].capital,
                    population: data[0].population,
                    languages,
                }

                refs.countryInfo.innerHTML = countryInfoMarkUp(countryData); 
            }
    
        })
}
    
function countryListMarkUp(data) {
                data.map(country => {
                
                    const countryList = {
                        flag: country.flags.svg,
                        name: country.name.official,
                    }

                    const markUpList = `
                <li>
                    <img class="country-flag" src="${countryList.flag}" alt="flag"></>${countryList.name}
                </li>
                `
                    refs.countryList.insertAdjacentHTML('beforeend', markUpList);
                });
            };

function languagesToList(array) {
    return Object.values(array[0].languages).join(', ');
};

function countryInfoMarkUp(countryData) {

               return `<h1 class="country-name">
                    <img class="country-flag--big" src="${countryData.flag}" alt="flag">
                    ${countryData.officialName}
                </h1>
                <p>
                    <b>Capital:</b>
                    ${countryData.capital}
                </p>
                 <p>
                     <b>Population:</b>
                    ${countryData.population} people
                </p>
                <p>
                    <b>Languages:</b>
                ${countryData.languages}
                </p>`
};