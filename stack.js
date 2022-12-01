function stack() {
  // pointer to top of the stack
  let tos = -1;
  const a = [];

  // Insert data to the stack
  function push(data) {
    a[++tos] = data;
  }

  // remove the last inserted data from the stack
  function pop() {
    if (!isEmpty()) {
      return a[tos--];
    }
    return "Stack is empty";
  }

  // return the data at top of the stack
  function top() {
    if (!isEmpty()) {
      return a[tos];
    }
    return "Stack is Empty";
  }

  // return true if the stack is empty
  function isEmpty() {
    return tos === -1;
  }

  return {
    push,
    pop,
    top,
    isEmpty,
  };
}

const newStack = stack();
newStack.push(1);
newStack.push(2);
newStack.push(3);
newStack.push(4);
// console.log(newStack.pop());
// console.log(newStack.pop());
// console.log(newStack.pop());
// console.log(newStack.pop());
// console.log(newStack.pop());
console.log(newStack.top());
console.log(newStack.isEmpty());
