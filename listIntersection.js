// T内にある全てのSの要素を返します。
function listIntersection(targetList, searchList) {
  let hashmap = {};
  let results = [];

  // キャッシュ
  for (let i = 0; i < targetList.length; i++) {
    hashmap[targetList[i]] = targetList[i];
  }

  // 反復。各ループはO(1)です。
  for (let i = 0; i < searchList.length; i++) {
    if (hashmap[searchList[i]] !== undefined) results.push(searchList[i]);
  }

  return results;
}

console.log(listIntersection([1, 2, 3, 4, 5, 6], [1, 4, 4, 5, 8, 9, 10, 11]));
console.log(
  listIntersection([3, 4, 5, 10, 2, 20, 4, 5], [4, 20, 22, 2, 2, 2, 10, 1, 4])
);
console.log(
  listIntersection([2, 3, 4, 54, 10, 5, 9, 11], [3, 10, 23, 10, 0, 5, 9, 2])
);
