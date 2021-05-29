function findPairs(numbers) {
  //ここから書きましょう
  let hashmap = {};
  let results = [];

  for (let i = 0; i < numbers.length; i++) {
    if (hashmap[numbers[i]] === undefined) {
      hashmap[numbers[i]] = 1;
      continue;
    }
    hashmap[numbers[i]]++;
  }
  for (i = 0; i < numbers.length; i++) {
    if (hashmap[numbers[i]] === 2) {
      if (results.indexOf(numbers[i]) == -1) {
        results.push(numbers[i]);
      }
    }
  }
  return results.sort((a, b) => a - b);
}
