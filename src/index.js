import './css/styles.css';
import Notiflix from 'notiflix';
import API from './fetchCountries';
import API2 from './prod-country-list';
import API4 from './if-list-equal1';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;
const ref = {
  input: document.querySelector('#search-box'),
  countryInfo: document.querySelector('.country-info'),
};

ref.input.addEventListener('input', debounce(getValue, DEBOUNCE_DELAY));

function getValue(event) {
  API2.countryList.innerHTML = '';
  if (event.target.value.trim() === '') {
    API4.countryCard.innerHTML = '';
    return;
  }
  const value = event.target.value;
  API.fetchCountries(value)
    .then(country => {
      API2.listCountryCard(country);
    })
    .catch(error => {
      return Notiflix.Notify.failure(
        'Oops, there is no country with that name'
      );
    });
}
