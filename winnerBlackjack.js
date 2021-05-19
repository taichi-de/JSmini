function winnerBlackjack(playerCards, houseCards) {
  let playerTotal = 0;
  let houseTotal = 0;

  for (let i = 0; i < playerCards.length; i++) {
    playerTotal += cardValue(playerCards[0]);
  }
  for (let i = 0; i < houseCards.length; i++) {
    houseTotal += cardValue(houseCards[0]);
  }

  if (playerTotal > 21) return false;
  else if (houseTotal < 22 && houseTotal >= playerTotal) return false;
  else return true;
}

function cardValue(cardString) {
  let string = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  let value = string.indexOf(cardString.substring(1)) + 1;
  return value;
}

// winnerBlackjack(["♥2","♣A","♣8","♥7","♥3"],["♥2","♣A","♣8","♥7","♥3"]) --> false
