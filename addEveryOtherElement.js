function addEveryOtherElement(intArr) {
  let total = 0;
  for (let i = 0; i < intArr.length; i += 2) {
    total += intArr[i];
  }
  return total;
}

// addEveryOtherElement([34,46,45,57]) --> 79
