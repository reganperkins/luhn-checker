
function getDigitAtIndex(number, index) {
  const numberString = String(number),
    digit = numberString.charAt(index);

  return parseInt(digit);
}

function check(number) {
  numberString = String(number);
  let numberArray = numberString.split('');

  for(let i = numberString.length - 2; i >= 0; i = i - 2) {
    const currentNumber = numberArray[i],
      doubledValue = currentNumber * 2;

    if (doubledValue > 9) {
      numberArray[i] = getDigitAtIndex(doubledValue, 0) + getDigitAtIndex(doubledValue, 1);
    } else {
      numberArray[i] = doubledValue;
    }
  }
  const result = numberArray.reduce((total, currentValue) => total + parseInt(currentValue), 0);
  return result % 10 === 0;
}

module.exports = {
  check,
}