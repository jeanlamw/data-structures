var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.sizing = 0;
  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {};

stackMethods.pop = function() {
  //item to remove should be the last item added;
  var itemRemoved = this.storage[this.sizing - 1];

  //check if size is greater than 0, only allow removal if its greater than 0
  if (this.sizing > 0) {
    delete this.storage[this.sizing - 1];
    this.sizing--;
  }
  return itemRemoved;
};

stackMethods.size = function() {
  return this.sizing;
};

stackMethods.push = function(value) {
  // iterate over the storage and add the value
  this.storage[this.sizing] = value;
  this.sizing++;
};



