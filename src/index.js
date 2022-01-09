import './css/styles.css';

const refs = {
    button: document.querySelector('.button-test'),
    input: document.querySelector('#search-box'),
    countryList: document.querySelector('.country-list'),
    countryInfo: document.querySelector('.country-info'),
}

const DEBOUNCE_DELAY = 300;

let countryInput = "";

refs.input.addEventListener('input', onInput);
refs.button.addEventListener('click', onClickEvent);

function onClickEvent(event) {

    refs.countryList.innerHTML = "";
    refs.countryInfo.innerHTML = "";
    // console.log(countryInput);
    fetchCountry(countryInput)
        .then(data => {

        console.dir(data)

         if (data == undefined) {
            return
        }

            if (data.length > 10) {
                
            alert("Too many matches found. Please enter a more specific name.")
            return
        };

            if (data.length > 1) {

            const countryList = data.map(country => {
                // console.log(country.name.official);
                const countryList = {
                    flag: country.flags.svg,
                    name: country.name.official,
                }

                console.log(countryList);

                const markUpList = `<li>
                                        <img class="country-flag" src="${countryList.flag}" alt="flag"></>${countryList.name}
                                    </li>`

                refs.countryList.insertAdjacentHTML('beforeend', markUpList);

            });

            console.log(countryList);

            return
            } 
            
            refs.countryList.innerHTML = "";

            const languages = Object.values(data[0].languages).join(', ');

            const countryData = {

                officialName: data[0].name.official,
                flag: data[0].flags.svg,
                capital: data[0].capital,
                population: data[0].population,
                languages,
            }

            console.log(countryData.languages);

            refs.countryInfo.innerHTML = `
            <h1 class="country-name">
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
        })
}

function onInput(event) {
    // console.dir(event.currentTarget.value);
    countryInput = event.currentTarget.value
}

function fetchCountry(country) {
     return fetch(`https://restcountries.com/v3.1/name/${country}?fields=name,capital,population,flags,languages;`)
        .then(r => {
             if (r.status == 404) {
                 alert("Oops, there is no country with that name")
                return
             }
             if (r.status != 200) {
                 alert("Oops, we are all doomed")
                return
             }
        
             return r.json()
        }).catch(error => {
            alert('error');
         })
         
};