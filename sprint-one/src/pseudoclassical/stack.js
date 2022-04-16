var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.sizing = 0;
  this.storage = {};
};

Stack.prototype.push = function(value) {
  this.storage[this.sizing] = value;
  this.sizing++;
};

Stack.prototype.pop = function() {
//item to remove should be the last item added;
  var itemRemoved = this.storage[this.sizing - 1];

  //check if size is greater than 0, only allow removal if its greater than 0
  if (this.sizing > 0) {
    delete this.storage[this.sizing - 1];
    this.sizing--;
  }
  return itemRemoved;
};

Stack.prototype.size = function() {
  return this.sizing;
};


