let arr = [34, 4546, 32, 3, 2, 8, 6, 76, 56, 45, 34, 566, 1];

function printArray(intArr) {
  let outputString = "[";
  for (let i = 0; i < intArr.length; i++) {
    outputString += intArr[i] + " ";
  }
  console.log(outputString + "]");
}

function insertionSort(list) {
  let n = list.length;
  // 配列を左から右へと処理します。
  for (let i = 1; i < n; i++) {
    // currentValueは配列の左端に挿入される項目です。
    let currentValue = list[i];

    // jは右から左へインデックスを追跡します。左側にあるものはすべてソートされています。
    for (let j = i - 1; j >= 0; j--) {
      // もし、currentValueが小さい場合は、左右の値を入れ替えます。
      if (currentValue <= list[j]) {
        list[j + 1] = list[j];
        list[j] = currentValue;
      }
      // 現在の値がA[j]よりも大きい場合、それは正しい位置にあるので、ループを終了してi+1に移動します。
      else break;
    }
  }
}

printArray(arr);
insertionSort(arr); // 昇順に並び替え
printArray(arr); // ソートされた配列
