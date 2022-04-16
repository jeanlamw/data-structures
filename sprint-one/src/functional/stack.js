var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  //initialize size to 0
  var sizing = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    // iterate over the storage and add the value
    storage[sizing] = value;
    sizing++;
  };

  someInstance.pop = function() {

    //item to remove should be the last item added;
    var itemRemoved = storage[sizing - 1];

    //check if size is greater than 0, only allow removal if its greater than 0
    if (sizing > 0) {
      delete storage[sizing - 1];
      sizing--;
    }
    return itemRemoved;

  };

  someInstance.size = function() {
    return sizing;
  };

  return someInstance;
};
