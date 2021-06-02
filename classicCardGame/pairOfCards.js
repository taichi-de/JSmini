// カードクラス
class Card {
  constructor(suit, value, intValue) {
    this.suit = suit;
    this.value = value;
    this.intValue = intValue;
  }
  // カードを表示するメソッド　例　♥K(13)
  getCardString() {
    return this.suit + this.value + "(" + this.intValue + ")";
  }
}

// デッキクラス
class Deck {
  constructor() {
    this.deck = Deck.generateDeck();
  }

  // デッキ（山札）を作成します
  static generateDeck() {
    const suit = ["♣", "♦", "♥", "♠"];
    const value = [
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
    let newDeck = [];
    for (let i = 0; i < suit.length; i++) {
      for (let j = 0; j < value.length; j++) {
        newDeck.push(new Card(suit[i], value[j], j + 1));
      }
    }
    return newDeck;
  }

  // カードを表示するメソッド
  printDeck() {
    for (let i = 0; i < this.deck.length; i++) {
      console.log(this.deck[i].getCardString());
    }
  }

  // カードをシャッフルするメソッド
  shuffleDeck() {
    for (let i = 0; i < this.deck.length; i++) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = this.deck[i];
      this.deck[i] = this.deck[j];
      this.deck[j] = temp;
    }
  }

  // カードを1枚引くメソッド
  draw() {
    return this.deck.pop();
  }
}

// ディーラークラス
class Dealer {
  // ディーラーはカードをシャッフルしプレイヤーにカードを配ります。
  static startGame(amaountOfPlayer, gameMode) {
    let table = {
      players: [],
      gameMode: gameMode,
      deck: new Deck(),
    };
    table["deck"].shuffleDeck();

    for (let i = 0; i < amaountOfPlayer; i++) {
      let playercards = [];

      for (let j = 0; j < Dealer.initialCards(gameMode); j++) {
        playercards.push(table["deck"].draw());
      }
      table["players"].push(playercards);
    }
    return table;
  }

  // ゲームモードによって配るカードの枚数を返すメソッド
  static initialCards(gameMode) {
    if (gameMode == "porker") return 5;
    if (gameMode == "21") return 2;
    if (gameMode == "Pair of Cards") return 5;
  }

  // テーブルの状態を表示するメソッド
  static printTableInfo(table) {
    console.log(
      "Amount of players: " +
        table["players"].length +
        "\nGamemode: " +
        table["gameMode"]
    );

    for (let i = 0; i < table["players"].length; i++) {
      console.log("\nPlayer " + (i + 1));
      for (let j = 0; j < table["players"][i].length; j++) {
        console.log(table["players"][i][j].getCardString());
      }
    }
  }

  // ゲームの勝敗を決める関数
  static winnerPairOfCards(table) {
    // 同じ数字をたくさん持っているプレイヤーの勝ち
    // 枚数が同じなら数字が大きいプレイヤーの勝ち

    // カードの強さ : 2 < 3 < 4 < 5 < 6 … J < Q < K < A
    const cardPower = [1, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2];

    //数字だけの配列を作ります。
    let numbers1 = Helperfunction.generateNumberArr(table["players"][0]);
    let numbers2 = Helperfunction.generateNumberArr(table["players"][1]);

    // プレイヤーのカードをハッシュマップにします。
    let hashmap1 = Helperfunction.createHashmap(cardPower, numbers1);
    let hashmap2 = Helperfunction.createHashmap(cardPower, numbers2);

    // デフォルトで引き分けを返します。
    let winner = "draw.";
    //　同じランクのカードの枚数を記録します。
    let pairOfCards = 0;

    for (let i = 0; i < cardPower.length; i++) {
      // それぞれのhashmapをcardPowerの強い順に比較していきます。0または同じ枚数の時は次のランクへ。
      // プレイヤー1が持つ同じランクのカードが多いとき
      if (hashmap1[cardPower[i]] > hashmap2[cardPower[i]]) {
        // 記録しているカードの枚数よりプレイヤー1が持つカードの枚数が多かったら、
        if (pairOfCards < hashmap1[cardPower[i]]) {
          // pairOfCardsとwinnerをプレイヤー1に書き換えます。
          pairOfCards = hashmap1[cardPower[i]];
          winner = "player 1.";
        }
      } else if (hashmap1[cardPower[i]] < hashmap2[cardPower[i]]) {
        if (pairOfCards < hashmap2[cardPower[i]]) {
          pairOfCards = hashmap2[cardPower[i]];
          winner = "player 2.";
        }
      }
    }
    console.log("The winner of this game is ");
    return winner;
  }
}

class Helperfunction {
  // 数字だけの配列を作ります。
  static generateNumberArr(playerhand) {
    let intArr = [];
    for (let i = 0; i < playerhand.length; i++) {
      intArr.push(playerhand[i].intValue);
    }
    return intArr;
  }

  // Hashmapを作成します。
  static createHashmap(cardPower, numberArr) {
    let hashmap = {};
    for (let i = 0; i < cardPower.length; i++) {
      hashmap[cardPower[i]] = 0;
    }
    for (let i = 0; i < numberArr.length; i++) {
      hashmap[numberArr[i]]++;
    }
    return hashmap;
  }
}

let table1 = Dealer.startGame(2, "Pair of Cards");
Dealer.printTableInfo(table1);
console.log(Dealer.winnerPairOfCards(table1));
