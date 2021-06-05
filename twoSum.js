function twoSum(intArr, sum) {
  let hashMap = {};
  for (let i = 0; i < intArr.length; i++) {
    const curr = intArr[i];
    if (!(curr in hashMap)) hashMap[curr] = i;
  }

  for (let i = 0; i < intArr.length; i++) {
    const diff = sum - intArr[i];
    if (diff in hashMap && hashMap[diff] !== i) {
      const j = hashMap[diff];
      return j > i ? [i, j] : [j, i];
    }
  }

  return [-1, -1];
}
