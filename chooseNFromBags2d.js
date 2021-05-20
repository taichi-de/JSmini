function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function printArray(intArr) {
  let string = "[";
  for (let i = 0; i < intArr.length; i++) {
    string += intArr[i] + " ";
  }
  console.log(string + "]");
}

// 2次元配列
function chooseNFromBags2d(n, listOfBags) {
  let totalBags = listOfBags.length;
  let chosenNumbers = [];
  let counter = 0;
  while (counter < n) {
    // counter % numberOfBags によって、ラウンドロビンができます。バッグの中を循環します。
    let currentBag = listOfBags[counter % totalBags];
    // 選択された数値を追加します。currentBagからランダムな値が選択されます。
    chosenNumbers.push(currentBag[randomInt(0, currentBag.length - 1)]);
    // counterを1ずつ増加します。
    counter += 1;
  }
  return chosenNumbers;
}

// bagOfNumbersはm x nの2次元配列です。m個のバッグ(totalBags)があり、それぞれのバッグがn個の要素(numbersPerBag)を持っています。
function chooseNFromBags1d(n, bagOfNumbers, totalBags, numbersPerBag) {
  let chosenNumbers = [];
  let counter = 0;
  while (counter < n) {
    // 現在のバッグの範囲を取得します。
    let currentBagStart = (counter % totalBags) * numbersPerBag;
    let currentBagEnd = currentBagStart + numbersPerBag;
    chosenNumbers.push(
      bagOfNumbers[randomInt(currentBagStart, currentBagEnd - 1)]
    );
    counter += 1;
  }
  return chosenNumbers;
}

// それぞれのバッグは4つの数字を含みます。
// 2次元配列
let luckyArrayOfBags = [
  [21, 5, 12, 25],
  [100, 88, 354, 643],
  [122, 145, 825, 4],
  [228, 674, 777, 77],
];
printArray(chooseNFromBags2d(10, luckyArrayOfBags));

// 1元配列
// [[292,39,78,978],[668,6,66,666],[662,876,276,782],[879,869,478,1968]]と等しいです。
let unluckyBagOfNumbers = [
  292, 39, 78, 978, 668, 6, 66, 666, 662, 876, 276, 782, 879, 869, 478, 1968,
];

// unluckyBagOfNumbersは4つのバッグを持ち、それぞれには4つの数字が含まれています。
printArray(chooseNFromBags1d(10, unluckyBagOfNumbers, 4, 4));
