var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.nextKeyToUse = 0;
  someInstance.sizing = 0;
  someInstance.storage = {};
  return someInstance;
};

var stackMethods = {};

// Implement the methods below
stackMethods.push = function(value) {
  // iterate over the storage and add the value
  this.storage[this.nextKeyToUse] = value;
  this.nextKeyToUse++;
  this.sizing++;
};

stackMethods.pop = function() {

  //item to remove should be the last item added;
  var itemRemoved = this.storage[this.sizing - 1];

  //check if size is greater than 0, only allow removal if its greater than 0
  if (this.sizing > 0) {
    delete this.storage[this.sizing - 1];
    this.nextKeyToUse--;
    this.sizing--;
  }
  return itemRemoved;

};

stackMethods.size = function() {
  return this.sizing;
};


