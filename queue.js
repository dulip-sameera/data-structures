function queue() {
  const a = [];
  return {
    enqueue(data) {
      a.push(data);
    },

    dequeue() {
      if (!this.isEmpty()) {
        return a.shift();
      }

      return "Queue is empty";
    },

    peek() {
      if (!this.isEmpty()) {
        return a[0];
      }
      return "Queue is empty";
    },

    getSize() {
      return a.length;
    },

    isEmpty() {
      return this.getSize() === 0;
    },
  };
}

const q = queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.dequeue();
// q.dequeue();
// q.dequeue();
// q.dequeue();
console.log(q.peek());
