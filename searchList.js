// TODO: 固定配列listと整数valueを受け取り、list内にあるvalueのインデックスを返す、searchListという関数をハッシュマップを使って作成。valueがlist内に複数ある場合は先に出てきたインデックスを返す。もし発見されない場合は-1を返す。

function searchList(list, value) {
  let hashMap = {};

  for (let i = 0; i < list.length; i++) {
    if (hashMap[list[i]] !== undefined) continue;
    hashMap[list[i]] = i;
  }

  return hashMap[value] !== undefined ? hashMap[value] : -1;
}

let sampleList = [3, 10, 23, 3, 4, 50, 2, 3, 4, 18, 6, 1, -2];

// 2
console.log(searchList(sampleList, 23));

// 12
console.log(searchList(sampleList, -2));

// -1
console.log(searchList(sampleList, 100));
