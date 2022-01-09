import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default function fetchCountry(country) {
     return fetch(`https://restcountries.com/v3.1/name/${country}?fields=name,capital,population,flags,languages;`)
        .then(r => {
             if (r.status == 404) {
                 Notify.failure("Oops, there is no country with that name")
                return
             }
             if (r.status != 200) {
                 Notify.failure("Oops, we are all doomed")
                return
             }
        
             return r.json()
        }).catch(error => {
            Notify.failure('error');
         })
};