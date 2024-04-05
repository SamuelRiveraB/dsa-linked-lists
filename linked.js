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

let myLinkedList = {
  head: {
    value: 10,
    next: {
      value: 5,
      next: {
        value: 16,
        next: null,
      },
    },
  },
};
