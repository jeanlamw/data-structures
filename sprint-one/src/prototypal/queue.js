var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.nextKeyToUse = 0;
  someInstance.firstKey = 0;
  someInstance.sizing = 0;
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  // //get the number of stored items
  // var length = Object.keys(storage).length;
  this.storage[this.nextKeyToUse] = value;
  this.sizing++;
  this.nextKeyToUse++;
};


queueMethods.dequeue = function() {

  var removedItem = this.storage[this.firstKey];

  //find the lowest key and take it out
  if (this.sizing > 0) {
    delete this.storage[this.firstKey];
    this.firstKey++;
    this.sizing--;
    return removedItem;
  }
};

queueMethods.size = function() {
  return this.sizing;
};

