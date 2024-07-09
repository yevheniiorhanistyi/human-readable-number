module.exports = function toReadable(number) {
  const singleDigits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

  if (number < 10) {
    return singleDigits[number];
  } else if (number < 20) {
    return teens[number - 10];
  } else if (number < 100) {
    if (number % 10 === 0) {
      return tens[number / 10 | 0];
    } else {
      return tens[number / 10 | 0] + " " + singleDigits[number % 10];
    }
  } else {
    if (number % 100 === 0) {
      return singleDigits[number / 100 | 0] + " hundred";
    } else {
      return singleDigits[number / 100 | 0] + " hundred " + toReadable(number % 100);
    }
  }
}
