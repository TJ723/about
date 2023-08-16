let threshold = 50;

function setup() {
  for (let i = 0; i < 3; i++) {
    let randomNum = generateRandomNumber(1, 100);
    let result = compareNumbers(randomNum, threshold);
    console.log(`Random Number: ${randomNum}, Result: ${result}`);
  }
}

function generateRandomNumber(min, max) {
  return Math.floor(random(min, max + 1));
}

function compareNumbers(num, threshold) {
  if (num > threshold) {
    return true;
  } else if (num === threshold) {
    return 'Equal';
  } else {
    return false;
  }
}
