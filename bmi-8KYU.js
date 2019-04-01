function bmi(weight, height) {
  let m = (weight/Math.pow(height, 2))
  return (m <= 18.5) ? "Underweight" : (m > 18.5 && m <= 25) ? "Normal" : (m > 25 && m <= 30) ? "Overweight" : "Obese";
}
