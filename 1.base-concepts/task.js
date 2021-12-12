function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;

  if (d < 0) {
    return arr;
  }
  else if (d === 0) {
    arr.push(-b / (2 * a));
    return arr;
  }
  else {
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
    return arr;
  }
}


function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let credit = amount - contribution;
  let current_date = new Date();
  let months = (date.getFullYear() - current_date.getFullYear()) * 12 - current_date.getMonth() + date.getMonth();
  let interest_rate = (1 / 12) * (percent / 100);
  let payment = credit * (interest_rate + (interest_rate / (Math.pow(1 + interest_rate, months) - 1)));
  totalAmount = payment * months;
  return +totalAmount.toFixed(2);
}
