function reverseArray(arr, start, end) {
  let middle = Math.floor((start + end) / 2);

  for (let i = start; i <= middle; i++) {
    let opposite = arr[start + end - i];
    let temp = arr[i];

    arr[i] = opposite;
    arr[start + end - i] = temp;
  }

  return arr;
}

function rotateByTimes(ids, n) {
  //arr.unshift(data);
  //arr.pop();
  if (n >= ids.length) n = n % ids.length;

  //for(let i = 0; i < n; i++) ids.unshift(ids.pop());

  //半分で区切った前後をそれぞれの中で交換
  reverseArray(ids, 0, ids.length - 1);
  reverseArray(ids, 0, n - 1);
  reverseArray(ids, n, ids.length - 1);

  return ids;
}
