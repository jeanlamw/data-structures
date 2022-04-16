class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.sizing = 0;
    this.storage = {};
  }

  push(value) {
    this.storage[this.sizing] = value;
    this.sizing++;
  }

  pop() {
    var itemRemoved = this.storage[this.sizing - 1];

    //check if size is greater than 0, only allow removal if its greater than 0
    if (this.sizing > 0) {
      delete this.storage[this.sizing - 1];
      this.sizing--;
    }
    return itemRemoved;
  }

  size() {
    return this.sizing;
  }

}