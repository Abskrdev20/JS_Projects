// for same structure create temperature ,
//area using inputs in form and calc values

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  // condition checks
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * weight) / 10000)).toFixed(2);
    let category;
    // nested if - else for guide
    if (bmi < 18.6) {
      category = 'Under Weight';
    } else if (bmi < 24.9) {
      category = 'Normal Range';
    } else {
      category = 'Over Weight';
    }
    results.innerHTML = `${bmi}\n${category}`;
  }
});
