import API3 from './if-list-more10';
import API4 from './if-list-equal1';
import API5 from './get-country-list';
const countryList = document.querySelector('.country-list');
function listCountryCard(country) {
  let listArray = [];
  country.forEach(element => {
    listArray.push(API5.getCountryList(element));
    API4.ifListEqualOne(listArray.length, element);
    countryList.append(...listArray);
  });
  API3.ifListMoreTen(listArray.length);
}
export default { listCountryCard, countryList };
