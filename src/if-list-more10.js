import Notiflix from 'notiflix';
const countryList = document.querySelector('.country-list');

function ifListMoreTen(length) {
  if (length > 10) {
    countryList.innerHTML = '';
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  }
}
export default { ifListMoreTen };
