function charInBagOfWordsCount(bagOfWords, keyCharacter) {
  let allChars = bagOfWords.join("").split("");
  let sum = 0;
  for (let i = 0; i < allChars.length; i++) {
    if (allChars[i] == keyCharacter) sum++;
  }
  return sum;
}

// charInBagOfWordsCount(["The","tech","giant","is in the","city center"],"e") --> 5
