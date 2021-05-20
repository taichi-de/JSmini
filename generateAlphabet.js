function generateAlphabet(firstAlphabet, secondAlphabet) {
  let ans = [];
  let isSmallerFirst =
    firstAlphabet.charCodeAt() - 97 < secondAlphabet.charCodeAt() - 97;
  let start = isSmallerFirst
    ? firstAlphabet.toLowerCase()
    : secondAlphabet.toLowerCase();
  let end = isSmallerFirst
    ? secondAlphabet.toLowerCase()
    : firstAlphabet.toLowerCase();

  for (let i = start.charCodeAt(); i <= end.charCodeAt(); i++) {
    ans.push(String.fromCharCode(i));
  }
  return ans;
}
