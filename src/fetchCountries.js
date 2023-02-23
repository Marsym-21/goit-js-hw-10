const BASE_URL = 'https://restcountries.com/v3.1';
const FILTER = '?fields=name.official,capital,population,flags.svg,languages';
function fetchCountries(name) {
  const url = `${BASE_URL}/name/${name}`;
  return fetch(url).then(response => response.json());
}

export default { fetchCountries };
