class Node {
  constructor(data) {
    this.next = null;
    this.data = data;
  }

  addNextNode(newNode) {
    let tempNode = this.next;
    this.next = newNode;
    newNode.next = tempNode;
  }
}

class SinglyLinkedList {
  constructor(arr) {
    this.head = arr.length > 0 ? new Node(arr[0]) : new Node(null);

    let currentNode = this.head;
    for (let i = 1; i < arr.length; i++) {
      currentNode.next = new Node(arr[i]);
      currentNode = currentNode.next;
    }
  }

  at(index) {
    let iterator = this.head;
    for (let i = 0; i < index; i++) {
      iterator = iterator.next;
      if (iterator == null) return null;
    }

    return iterator;
  }

  preappend(newNode) {
    newNode.next = this.head;
    this.head = newNode;
  }

  popFront(self) {
    this.head = this.head.next;
  }

  delete(index) {
    if (index == 0) return self.popFront();

    let iterator = this.head;
    for (let i = 0; i < index - 1; i++) {
      if (iterator.next == null) return null;
      iterator = iterator.next;
    }
    iterator.next = iterator.next.next;
  }

  reverse() {
    if (this.head === null || this.head.next === null) return;

    // オブジェクトなので、=は実際の値を格納しているわけではなく、メモリアドレスを指している点に十分注意ください。
    // A -> B -> C を、C -> B -> Aに変更する場合は、向きに少し混乱するのでゆっくり解読しましょう。
    let reverse = this.head;
    this.head = this.head.next;
    reverse.next = null;

    while (this.head !== null) {
      // =はメモリアドレスを指します。紙に書いてロジックを確認しましょう。
      let temp = this.head;
      this.head = this.head.next;
      temp.next = reverse;
      reverse = temp;
    }
    // 処理が終わったら、headのnextを反転したリストを含むtempHeadに割り当てましょう。
    this.head = reverse;
  }

  printList() {
    let iterator = this.head;
    let str = "";
    while (iterator != null) {
      str += iterator.data + " ";
      iterator = iterator.next;
    }
    console.log(str);
  }
}

let numList = new SinglyLinkedList([
  35, 23, 546, 67, 86, 234, 56, 767, 34, 1, 98, 78, 555,
]);

numList.printList();
numList.reverse();
numList.printList();
