function decimalToBinary(decNumber) {
  //この1行で書けるみたい
  // return (decNumber >>> 0).toString(2);
  let bin = 0;
  let rem,
    i = 1,
    step = 1;
  while (decNumber != 0) {
    rem = decNumber % 2;
    decNumber = parseInt(decNumber / 2);
    bin = bin + rem * i;
    i = i * 10;
  }
  return bin;
}
