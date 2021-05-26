// 例題1
// アルファベットで構成される文字列が与えられるのでそれがパングラムかどうか判定する、isPangramという関数を作成してください。パングラムとは、a-zまでの全てのアルファベットを含んだ文字列のことを指します。

function isPangram(string) {
  let hashmap = {};
  let lowerString = string.replace(/ /g, "").toLowerCase();

  for (let i = 0; i < lowerString.length; i++) {
    if (hashmap[lowerString[i]] === undefined) hashmap[lowerString[i]] = 1;
    else hashmap[lowerString[i]]++;
  }

  return Object.keys(hashmap).length == 26 ? true : false;
}

// True
console.log(
  isPangram("we promptly judged antique ivory buckles for the next prize")
);

// False
console.log(
  isPangram(
    "sheep for a unique zebra when quick red vixens jump over the yacht"
  )
);

// True
console.log(isPangram("a quick brown fox jumps over the lazy dog"));

// 例題2
// 文字列stringが与えられるので、全ての文字が同じ数だけ含まれているかどうか判定するfindXTimesという関数を作成してください。

function findXTimes(string) {
  let hashmap = {};
  for (let i = 0; i < string.length; i++) {
    if (hashmap[string[i]] === undefined) hashmap[string[i]] = 1;
    hashmap[string[i]]++;
  }

  let keys = Object.keys(hashmap);
  for (let i = 1; i < keys.length; i++) {
    if (hashmap[keys[i]] != hashmap[keys[i - 1]]) return false;
  }
  return true;
}

// true
console.log(findXTimes("babacddc"));

// true
console.log(findXTimes("aaabbbcccddd"));

// false
console.log(findXTimes("aaabbccdd"));

// true
console.log(findXTimes("zadbchvwxbwhdxvcza"));

// false
console.log(findXTimes("zadbchvwxbwhdxvczb"));
