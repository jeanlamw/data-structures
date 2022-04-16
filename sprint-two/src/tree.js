var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  //null; // fix me
  // your code here

  //functional share
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {

  var subTree = Tree(value);
  this.children.push(subTree);

};

treeMethods.contains = function(target) {
  var isTargetThere = false;

  if (this.value === target) {
    isTargetThere = true;
  } else {
    if (this.children) {
      for (var i = 0; i < this.children.length; i++) {
        if (this.children[i].contains(target)) {
          isTargetThere = true;
          break;
        }
      }
    }
  }
  return isTargetThere;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

