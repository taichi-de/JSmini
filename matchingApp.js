function hasSameType(user1, user2) {
  //ここから書きましょう
  let user1Pattern = getCodePattern(user1);
  let user2Pattern = getCodePattern(user2);

  return user1Pattern == user2Pattern;
}

function getCodePattern(string) {
  let hashMap = {};

  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (!hashMap[char]) hashMap[char] = 1;
    else hashMap[char] += 1;
  }

  let code = Object.keys(hashMap).reduce(
    (string, key) => (string += hashMap[key]),
    ""
  );

  return code;
}
