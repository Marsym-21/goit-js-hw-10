import './css/styles.css';
import API from './fetchCountries';
import debounce from 'lodash.debounce';
import API2 from './prod-country-list';

const DEBOUNCE_DELAY = 300;
const ref = {
  input: document.querySelector('#search-box'),
  countryInfo: document.querySelector('.country-info'),
};

ref.input.addEventListener('input', debounce(getValue, DEBOUNCE_DELAY));

function getValue(event) {
  API2.countryList.innerHTML = '';
  if (event.target.value.trim() === '') {
    API2.countryCard.innerHTML = '';
    return;
  }
  const value = event.target.value;
  API.fetchCountries(value)
    .then(country => {
      API2.listCountryCard(country);
    })
    .catch(error => console.log(error));
}
