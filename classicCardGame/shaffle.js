// Math.random --> 0以上1未満のランダムな数
console.log("0以上1未満のランダムな数: " + Math.random());
console.log("--");

// 0以上10未満のランダムな数
console.log("0以上10未満のランダムな数: " + Math.random() * 10);
console.log("--");

// 0以上10未満のランダムな整数
console.log("0以上10未満のランダムな整数: " + Math.floor(Math.random() * 10));
console.log("--");

// では配列の中の数字をランダムに並び替えてみます。
let intArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(intArr);

for (let i = intArr.length - 1; i >= 0; i--) {
  // ランダムに得た数値をインデックスとし、two pointerで入れ替えます。
  let j = Math.floor(Math.random() * (i + 1));

  // temporary(仮)の意味
  // i番目をtempに保存し、i番目をj番目で更新し、j番目をtempで更新します。(??)
  let temp = intArr[i];
  intArr[i] = intArr[j];
  intArr[j] = temp;
}

// ランダムに入れ替えた後の配列
console.log(intArr);
