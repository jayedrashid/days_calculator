//function dateCalculator(date1, date2) {
  //let firstDate = new Date(date1);
  //let secondDate = new Date(date2);
  //let daysBetweenDates = (secondDate.getTime() - firstDate.getTime()) / (1000 * 3600 * 24)  
  //console.log(daysBetweenDates);
//}
//dateCalculator("01/01/2021","01/05/2021");

const firstDate = document.getElementById('date-1');
const secondDate = document.getElementById('date-2');

const button = document.querySelector('button');
const h2 = document.querySelector('h2');


function dateCalculator() {
  let date1 = new Date(firstDate.value);
  let date2 = new Date(secondDate.value);
  
  let daysBetweenDates = (date2.getTime() - date1.getTime()) / (1000 * 3600 * 24)
  
  console.log(daysBetweenDates);
  h2.innerHTML = `${daysBetweenDates} days are between the two dates`
}

button.addEventListener('click', dateCalculator);

