

var HashTable = function() {
  this._limit = 8;
  // hash table storage
  this._storage = LimitedArray(this._limit); //{.....}


};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit); // get hashed index from key
  // make a bucket corresponding to the hashed index
  // save k,v to storage using helper function

  //this._storage[index] = [];
  // [[k, v], [k, v]]
  // k = 1
  //            hashedIndex
  // storage = [{{0, 'a'}, {1, 'b'}}]
  //

  //
  // this._storage[index].push(v);

  // this._storage.set(index, []);
  // this._storage.set(0, [1]);
  // this._storage.set(5, [2]);


  //-----------------------------------------------------------//
  //if its a new hash index, just set the value by creating a bracket array and adding another  [key, value] array
  if (this._storage[index] === undefined) {
    this._storage.set(index, [[k, v]]);
  } else { //if its not a new hash index, there is an bracket array, so we just add the new key value pair

    //get the existing bracket array
    var bracketArray = this._storage.get(index);

    //add the newKeyValue to the bracket array
    //  if the key in the key value pair is duplicated, we want to replace it with the new value
    //      iterate over the bracket array, check if the key that is being passed in exist in our bracket array,
    //         if it does, we assign the key value to the current key value being passed in
    // if the key is not duplicated, it means it an actual new key value pair and we just add it in the bracket array

    for (var i = 0; i < bracketArray.length; i++) { //[ [k,v], [k,v], [k,v], [k,v]]
      var keyValue = bracketArray[i];
      if (keyValue[0] === k) {
        keyValue[1] = v;
      } else {
        bracketArray.push([k, v]);
      }
    }
  }
  //at the hash index you reassign it the new updated bracket
  this._storage[index] = this._storage.get(index);

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  //get the bracketArray at the hashIndex
  var bracketArray = this._storage.get(index);

  //[key: value]
  //iterate over the bracketArray and check if the key matches the argument k
  //return out the value
  for (var i = 0; i < bracketArray.length; i++) {
    var keyValue = bracketArray[i];
    if (keyValue[0] === k) {
      return keyValue[1];
    }
  }

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  //removing a key value pair?
  //get the bracket array
  //  iterate over the bracket array to find the k, spice it out the bracket array
  //at the hash index assign it the new brackey array

  var bracketArray = this._storage.get(index);

  for (var i = 0; i < bracketArray.length; i++) {
    var keyValue = bracketArray[i];
    if (keyValue[0] === k) {
      bracketArray.splice(i, 1);
    }
  }

};

// we need to write the code that adds each storage container to the LimitedArray

/*
 * Complexity: What is the time complexity of the above functions?
 */


