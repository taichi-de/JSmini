function primesUpToNCount(n) {
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (Number(i)) {
      count++;
    }
  }
  return count;
}

function Number(n) {
  if (n === 2) {
    return true;
  }
  for (let j = 2; j < n; j++) {
    if (n % j === 0) {
      return false;
    }
  }
  return true;
}
