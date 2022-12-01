function node(data = null, next = null) {
  return {
    data,
    next,
  };
}

function linkedList() {
  let head = null;
  let count = 0;

  function addFirst(data) {
    head = node(data);
    count++;
  }

  function append(data) {
    // if the list is empty
    if (head == null) {
      addFirst(data);
      return;
    }

    let temp = head;
    while (temp.next != null) {
      temp = temp.next;
    }
    temp.next = node(data);
    count++;
  }

  function prepend(data) {
    head = node(data, head);
    count++;
  }

  function size() {
    return count;
  }

  function getHead() {
    return head;
  }

  function getTail() {
    let temp = head;
    while (temp.next != null) {
      temp = temp.next;
    }

    return temp;
  }

  // considering the list is zero indexed
  function at(index) {
    if (index >= count) throw new Error("IndexOutOfBound:");

    let temp = head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }

    return temp;
  }

  function pop() {
    if (head === null) {
      return "List is empty";
    }

    let temp = head;
    while (temp.next.next != null) {
      temp = temp.next;
    }
    let result = temp.next;
    temp.next = null;
    return result;
  }

  function contains(data) {
    if (head === null) return "List is empty";

    let temp = head;
    while (temp !== null) {
      if (temp.data === data) {
        return true;
      }

      temp = temp.next;
    }
    return false;
  }

  function find(data) {
    if (head === null) return "List is empty";

    let temp = head;
    for (let i = 0; i < count; i++) {
      if (at(i).data === data) {
        return i;
      }
    }

    return null;
  }

  function toString() {
    if (head === null) {
      return "List is empty";
    }

    let temp = head;
    let string = "";
    while (temp != null) {
      string += `( ${temp.data} ) -> `;
      temp = temp.next;
    }
    return `${string}null`;
  }

  function insertAt(data, index) {
    if (head === null) return "List is empty";
    if (index >= count) throw new Error("IndexOutOfBound");

    let temp = head;
    let prev = null;
    for (let i = 0; i < index; i++) {
      prev = temp;
      temp = temp.next;
    }
    prev.next = node(data, temp);
    count++;
  }

  function removeAt(index) {
    if (head === null) return "List is empty";
    if (index >= count) throw new Error("IndexOutOfBound");

    let temp = head;
    let prev = null;
    for (let i = 0; i < index; i++) {
      prev = temp;
      temp = temp.next;
    }

    prev.next = temp.next;
    count--;
  }

  return {
    append,
    prepend,
    toString,
    size,
    getHead,
    getTail,
    at,
    pop,
    contains,
    find,
    insertAt,
    removeAt,
  };
}

// testing
// const list = linkedList();
// list.append(0);
// list.append(1);
// list.append(2);
// list.append(3);
// list.append(4);
// list.append(5);

// console.log(list.toString());
// console.log(list.size());

// prepend
// list.prepend(7);
// console.log(list.toString());

// list size
// console.log(`list size = ${list.size()}`);

// // head
// console.log("Head Element");
// console.log(list.getHead());

// // tail
// console.log("Tail Element");
// console.log(list.getTail());

// at
// const index = 6;
// console.log(`Element at index ${index}`);
// console.log(list.at(index));

// pop
// console.log(`remove element from end: ${JSON.stringify(list.pop())}`);
// console.log(list.toString());

// contains
// const val = 2;
// console.log(`does list contains ${val}: ${list.contains(val)}`);

// find
// const look = 1;
// console.log(`Index of ${look}: ${list.find(look)}`);

// insertAt
// list.insertAt(6, 3);
// console.log(list.toString());
// console.log(list.size());

// // removeAt
// list.removeAt(3);
// console.log(list.toString());
// console.log(list.size());
