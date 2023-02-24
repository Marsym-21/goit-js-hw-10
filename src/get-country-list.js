function getCountryList(element) {
  const countryItem = document.createElement('li');
  countryItem.classList.add('item');
  countryItem.innerHTML = `
        <img src="${element.flags.svg}" alt="${element.flags.alt}" width ="40px" height ="40"px />
          <h1 class="title">${element.name.official}</h1>`;
  return countryItem;
}
export default { getCountryList };
