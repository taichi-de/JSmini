let arr = [34, 4546, 32, 3, 2, 8, 6, 76, 56, 45, 34, 566, 1];

function printArray(intArr) {
  let outputString = "[";
  for (let i = 0; i < intArr.length; i++) {
    outputString += intArr[i] + " ";
  }
  console.log(outputString + "]");
}

printArray(arr);

function selectionSort(list) {
  let n = list.length;
  for (let i = 0; i < n; i++) {
    let minIndex = i; // i番目の値を暫定の最小値とします。
    for (let j = i + 1; j < n; j++) {
      if (list[j] <= list[minIndex]) {
        // 暫定の最小値以下なら最小値を更新
        minIndex = j; // 最小値を持つ
      }
    }
    // list[i]とA[minIndex]の入れ替え
    temp = list[i];
    list[i] = list[minIndex];
    list[minIndex] = temp;
  }
}

selectionSort(arr); // 昇順に並び替え
printArray(arr); // ソートされた配列
