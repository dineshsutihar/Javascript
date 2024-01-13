const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const calculateBtn = document.querySelector('button');
const result = document.getElementById('results');
const weightGuide = document.getElementById('weight-guide');

console.log(heightInput, weightInput, calculateBtn, result, weightGuide);

calculateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const height = heightInput.value;
    const weight = weightInput.value;
    const bmi = weight / (height * height);
    result.innerText = bmi;
    let bmiText = '';
    if (bmi < 18.6) {
        bmiText = 'Underweight';
    } else if (bmi < 25) {
        bmiText = 'Normal';
    } else if (bmi < 30) {
        bmiText = 'Overweight';
    } else {
        bmiText = 'Obese';
    }

    weightGuide.innerHTML =`<h1>You are ${bmiText}</h1>`
});