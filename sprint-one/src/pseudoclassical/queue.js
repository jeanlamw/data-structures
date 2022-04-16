var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.nextKeyToUse = 0;
  this.firstKey = 0;
  this.sizing = 0;
  this.storage = {};

};

Queue.prototype.enqueue = function(value) {
  this.storage[this.nextKeyToUse] = value;
  this.sizing++;
  this.nextKeyToUse++;
};
Queue.prototype.dequeue = function() {
  var removedItem = this.storage[this.firstKey];

  //find the lowest key and take it out
  if (this.sizing > 0) {
    delete this.storage[this.firstKey];
    this.firstKey++;
    this.sizing--;
    return removedItem;
  }
};

Queue.prototype.size = function () {
  return this.sizing;
};
