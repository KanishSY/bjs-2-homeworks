// Задание 1
function getArrayParams(arr) {
	let min = 5;
	let max = 70;
	let sum = 0;
	let avg = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      arr[i] = max;
    }
    if (arr[i] < min) {
      arr[i] = min;
    };
    sum += arr[i];
  }
  avg = sum/arr.length;
  avg = Number(avg.toFixed(2));
  return { min, max, avg };
};

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;
  let sum;

  for (let i = 0; i < arrOfArr.length; i++){
    sum = func(arrOfArr[i]);
    if (max < sum) {
      max = sum
    }
  }
  return max;
}

// Задание 3
function worker2(arr) {
  let min = 0;
  let max = 0;
  let difference;

  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  difference = max - min;
  return Math.abs(difference);
}
