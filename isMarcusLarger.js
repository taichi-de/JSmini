function isMarcusLarger(stringOperand1, stringOperand2) {
  let numberOfString1 = numberOfString(stringOperand1);
  let numberOfString2 = numberOfString(stringOperand2);
  return numberOfString1 > numberOfString2;
}

function numberOfString(stringArr) {
  let totalNumberOfString = 0;
  for (let i = 0; i < stringArr.length; i++) {
    totalNumberOfString += numberOfChar(stringArr[i]);
  }
  return totalNumberOfString;
}

function numberOfChar(string) {
  let totalNumberOfChar = 0;
  for (let i = 0; i < string.length; i++) {
    totalNumberOfChar += string[i].toLowerCase().charCodeAt(0);
  }
  return totalNumberOfChar;
}

// isMarcusLarger("magni","est") --> true
