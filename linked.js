// const basket = ["apples", "grapes", "pears"];

// linked list: apples --> grapes --> pears

// apples
// 8947 --> grapes
//           8792 --> pears
//                     372 --> null

// let obj1 = { a: true };
// let obj2 = obj1;
// obj1.a = "booya";
// delete obj1;
// console.log(obj1, obj2);

// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null,
//       },
//     },
//   },
// };

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode != null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    if (index === 0) {
      return this.prepend(value);
    }

    let aux = 0;
    let currentNode = this.head;
    let previousNode = null;
    while (aux < index) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      aux++;
    }
    const newNode = new Node(value);
    newNode.next = currentNode;
    newNode.prev = previousNode;
    previousNode.next = newNode;
    currentNode.prev = newNode;
    this.length++;
    return this;
  }

  remove(index) {
    if (index >= this.length) {
      return console.log("Index not found");
    }
    if (index === 0) {
      this.head = this.head.next;
      this.head.prev = null;
      return this;
    }

    let aux = 0;
    let currentNode = this.head;
    let previousNode = null;
    while (aux < index) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      aux++;
    }
    previousNode.next = currentNode.next;
    previousNode.next.prev = previousNode;
    this.length--;
    return this;
  }
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(2);
myLinkedList.insert(2, 3);
myLinkedList.remove(0);
console.log(myLinkedList.printList());
// console.log(myLinkedList);
