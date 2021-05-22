// 例題
// 自然数nが与えられるので、1からnまでに含まれる素数の和を返す、sumPrimeUpToNという関数を作成

function sumPrimeUpToN(n) {
  let count = 0;
  let prineList = generatePrimeList(n);

  for (let i = 0; i < prineList.length; i++) {
    count += prineList[i];
  }

  return count;
}

function generatePrimeList(n) {
  let primeList = [];
  let cache = [];
  for (let i = 0; i <= n; i++) {
    cache.push(true);
  }

  for (
    let currentPrime = 2;
    currentPrime <= Math.ceil(Math.sqrt(n));
    currentPrime++
  ) {
    if (!cache[currentPrime]) continue;
    let i = 2;
    let ip = i * currentPrime;

    while (ip <= n) {
      cache[ip] = false;
      i++;
      ip = i * currentPrime;
    }
  }

  for (let i = 2; i < cache.length; i++) {
    if (cache[i]) primeList.push(i);
  }

  return primeList;
}

console.log(generatePrimeList(53));

// 381
console.log(sumPrimeUpToN(53));

// 963
console.log(sumPrimeUpToN(89));

// 1060
console.log(sumPrimeUpToN(97));
