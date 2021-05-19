function sumOfAllPrimes(n) {
  let arr = isPrimes(n);
  if (arr.length === 0) return 0;
  return arr.reduce((acc, curr) => acc + curr);
}

function isPrimes(n) {
  let arr = [];
  for (let i = 2; i <= n; i++) {
    let check = 0;
    for (let j = 0; j <= i; j++) {
      if (i % j === 0) check += 1;
    }
    if (check === 2) arr.push(i);
    check = 0;
  }
  return arr;
}
