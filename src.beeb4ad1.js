parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"krre":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";require("./css/styles.css");const n={button:document.querySelector(".button-test"),input:document.querySelector("#search-box"),countryList:document.querySelector(".country-list"),countryInfo:document.querySelector(".country-info")},t=300;let e="";function a(t){n.countryList.innerHTML="",n.countryInfo.innerHTML="",l(e).then(t=>{if(console.dir(t),null==t)return;if(t.length>10)return void alert("Too many matches found. Please enter a more specific name.");if(t.length>1){const e=t.map(t=>{const e={flag:t.flags.svg,name:t.name.official};console.log(e);const a=`<li>\n                                        <img class="country-flag" src="${e.flag}" alt="flag"></>${e.name}\n                                    </li>`;n.countryList.insertAdjacentHTML("beforeend",a)});return void console.log(e)}n.countryList.innerHTML="";const e=Object.values(t[0].languages).join(", "),a={officialName:t[0].name.official,flag:t[0].flags.svg,capital:t[0].capital,population:t[0].population,languages:e};console.log(a.languages),n.countryInfo.innerHTML=`\n            <h1 class="country-name">\n                 <img class="country-flag--big" src="${a.flag}" alt="flag">\n                ${a.officialName}\n             </h1>\n            <p>\n                <b>Capital:</b>\n                ${a.capital}\n            </p>\n            <p>\n                <b>Population:</b>\n                ${a.population} people\n            </p>\n            <p>\n                <b>Languages:</b>\n                ${a.languages}\n            </p>`})}function o(n){e=n.currentTarget.value}function l(n){return fetch(`https://restcountries.com/v3.1/name/${n}?fields=name,capital,population,flags,languages;`).then(n=>{if(404!=n.status){if(200==n.status)return n.json();alert("Oops, we are all doomed")}else alert("Oops, there is no country with that name")}).catch(n=>{alert("error")})}n.input.addEventListener("input",o),n.button.addEventListener("click",a);
},{"./css/styles.css":"krre"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-10/src.beeb4ad1.js.map