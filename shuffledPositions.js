function shuffledPositions(arr, shuffledArr) {
  //ここから書きましょう
  let hashmap = {};

  for (let i = 0; i < shuffledArr.length; i++) {
    hashmap[shuffledArr[i]] = i;
  }

  let res = [];

  for (let i = 0; i < arr.length; i++) {
    res.push(hashmap[arr[i]]);
  }

  return res;
}
