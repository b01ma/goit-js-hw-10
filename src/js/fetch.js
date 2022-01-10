import { Notify } from 'notiflix/build/notiflix-notify-aio';

// const options = ['name', 'capital', 'population', 'flags', 'languages'] - 
// Options - it's an array with the names of the fields that we'll be returned 
// from the server

export default function fetchCountry(country, options) {
     return fetch(`https://restcountries.com/v3.1/name/${country}?fields=${options};`)
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
            Notify.failure(error);
         })
};