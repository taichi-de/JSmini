// エラトステネスのふるいのアルゴリズム
function allNPrimesSieve(n) {
  // サイズnのブーリアン値trueを持つリストを生成します。キャッシュ
  let cache = [];
  for (let i = 0; i < n; i++) {
    cache.push(true);
  }

  // ステップを√n回繰り返します。nが素数でないと仮定すると、n = a * bと表すことができるので、aとbの両方が√n 以上になることはありえません。
  // したがって、√n * √n = n は最大合成組み合わせになります。
  for (
    let currentPrime = 2;
    currentPrime < Math.ceil(Math.sqrt(n));
    currentPrime++
  ) {
    // キャッシュ内の素数(p)の倍数をすべてfalseにしていきます。
    // iは2からスタートします。
    if (!cache[currentPrime]) continue;
    let i = 2;
    let ip = i * currentPrime;
    while (ip < n) {
      cache[ip] = false;
      // i*pをアップデートします。
      i += 1;
      ip = i * currentPrime;
    }
  }

  // キャッシュ内のすべてのtrueのインデックスは素数です。
  let primeNumbers = [];
  for (let i = 2; i < cache.length; i++) {
    if (cache[i]) {
      primeNumbers.push(i);
    }
  }

  return primeNumbers;
}

console.log(allNPrimesSieve(100));
console.log(allNPrimesSieve(100).length);
