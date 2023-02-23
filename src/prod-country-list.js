import Notiflix from 'notiflix';
const countryList = document.querySelector('.country-list');
const countryCard = document.querySelector('.country-info');
function listCountryCard(country) {
  let listArray = [];
  country.forEach(element => {
    const countryItem = document.createElement('li');
    countryItem.classList.add('item');
    countryItem.innerHTML = `
        <img src="${element.flags.svg}" alt="${element.flags.alt}" width ="40px" height ="40"px />
          <h1 class="title">${element.name.official}</h1>`;
    listArray.push(countryItem);
    if (listArray.length === 1) {
      const values = Object.values(element.languages);
      countryCard.innerHTML = `<p class="text"> <b>Capital:</b> ${element.capital}</p><p class="text"> <b>Population:</b> ${element.population}</p><p class="text"> <b>Languages:</b> ${values}</p>`;
    } else {
      countryCard.innerHTML = '';
    }

    countryList.append(...listArray);
  });
  if (listArray.length > 10) {
    console.log('більше 10');
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  }
}

export default { listCountryCard, countryList, countryCard };