/*
  Write function bmi that calculates body mass index (bmi = weight / height2).
  if bmi <= 18.5 return "Underweight"
  if bmi <= 25.0 return "Normal"
  if bmi <= 30.0 return "Overweight"
  if bmi > 30 return "Obese"
*/
const bmi = (weight, height) => {
  const bmiValue = weight / Math.pow(height, 2);
  if (bmiValue <= 18.5) return "Underweight"
  else if (bmiValue <= 25 && bmiValue > 18.5) return "Normal"
  else if (bmiValue <= 30 && bmiValue > 25) return "Overweight"
  else if (bmiValue > 30) return "Obese"
}
console.log(bmi(20, 1.80))
console.log(bmi(80, 1.80))
// it didn't work