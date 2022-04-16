class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {

    this.sizing = 0;
    this.firstKey = 0;
    this.nextKeyToUse = 0;
    this.storage = {};
  }

  enqueue(value) {
    this.storage[this.nextKeyToUse] = value;
    this.sizing++;
    this.nextKeyToUse++;
  }

  dequeue () {
    var removedItem = this.storage[this.firstKey];
    if (this.sizing > 0) {
      delete this.storage[this.firstKey];
      this.firstKey++;
      this.sizing--;
      return removedItem;
    }
  }

  size () {
    return this.sizing;
  }

}
