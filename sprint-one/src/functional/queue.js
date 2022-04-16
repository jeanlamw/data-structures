var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var nextKeyToUse = 0;
  var firstKey = 0;
  var sizing = 0;
  //var listOfKeys = Object.keys(storage);

  //add at the end
  someInstance.enqueue = function(value) {
    // //get the number of stored items
    // var length = Object.keys(storage).length;
    storage[nextKeyToUse] = value;
    sizing++;
    nextKeyToUse++;

  };


  someInstance.dequeue = function() {

    var removedItem = storage[firstKey];

    //find the lowest key and take it out
    if (sizing > 0) {
      delete storage[firstKey];
      firstKey++;
      sizing--;
      return removedItem;
    }

  };

  // someInstance.dequeue = function() {

  //   var firstKeyToRemove = Math.min(listOfKeys);

  //   var removedItem = storage[firstKeyToRemove];

  //   if (size > 0) {
  //     delete storage[firstKeyToRemove];
  //     size--;
  //   }

  //   console.log(storage);
  //   listOfKeys = Object.keys(storage);

  //   return removedItem;
  // };

  someInstance.size = function() {
    return sizing;
  };

  return someInstance;
};
