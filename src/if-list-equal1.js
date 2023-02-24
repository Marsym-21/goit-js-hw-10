const countryCard = document.querySelector('.country-info');

function ifListEqualOne(length, element) {
  if (length === 1) {
    const values = Object.values(element.languages).join(', ');
    countryCard.innerHTML = `<p class="text"> <b>Capital:</b> ${element.capital}</p><p class="text"> <b>Population:</b> ${element.population}</p><p class="text"> <b>Languages:</b> ${values}</p>`;
  } else {
    countryCard.innerHTML = '';
  }
}

export default { ifListEqualOne, countryCard };
