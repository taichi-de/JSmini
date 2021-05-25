function isPangram(string) {
  //ここから書きましょう
  let alphabets = "abcdefghijklnmopqrstuvwxyz";
  caches = [];
  for (let i = 0; i < alphabets.length; i++) {
    caches.push(false);
  }
  let str = string.replace(/\s+/g, "").toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(alphabets[i]) !== -1) caches[i] = true;
  }

  for (let i = 0; i < caches.length; i++) if (!caches[i]) return false;

  return true;
}
