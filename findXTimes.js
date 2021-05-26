function findXTimes(teams) {
  let hashmap = {};

  for (let i = 0; i < teams.length; i++) {
    if (hashmap[teams[i]] === undefined) hashmap[teams[i]] = 1;
    else hashmap[teams[i]] += 1;
  }

  list = Object.values(hashmap);

  for (let i = 0; i < list.length - 1; i++) {
    if (list[i] !== list[i + 1]) return false;
  }
  return true;
}
