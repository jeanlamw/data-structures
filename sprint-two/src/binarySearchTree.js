var BinarySearchTree = function(value) {
  var searchTree = {};

  searchTree.value = value;


  searchTree.left = null; // BST with all values lower than current value
  searchTree.right = null; // BST with all values greater than current value
  _.extend(searchTree, binaryTreeMethods);

  return searchTree;
};

var binaryTreeMethods = {};

//{ {7....}  }

binaryTreeMethods.insert = function(value) {
  // adds new value to correct location in tree
  var subBinarySearchTree = BinarySearchTree(value);

  var addChildTree = function(parentTree, value) {
    if (value < parentTree.value) {
      if (parentTree.left === null) {
        parentTree.left = subBinarySearchTree;
      } else {
        addChildTree(parentTree.left, value);
      }
    } else if (value > parentTree.value) {
      if (parentTree.right === null) {
        parentTree.right = subBinarySearchTree;
      } else {
        addChildTree(parentTree.right, value);
      }
    }
  };

  addChildTree(this, value);

};

binaryTreeMethods.contains = function(value) {
  // returns boolean whether value is in the tree
  var isInTree = false;

  var searchChildTree = function(parentTree, value) {
    if (parentTree.value === value) {
      isInTree = true;
    } else if (parentTree.left && value < parentTree.value) {

      searchChildTree(parentTree.left, value);
    } else if (parentTree.right && value > parentTree.value) { //value > parentTree.value
      searchChildTree(parentTree.right, value);
    }
  };

  searchChildTree(this, value);

  return isInTree;
};

binaryTreeMethods.depthFirstLog = function(callback) {
  console.log(callback);

  // executes callback on each value in tree

  var applyCallbackToTree = function(parentTree, callback) {

    callback(parentTree.value);
    if (parentTree.left) {
      applyCallbackToTree(parentTree.left, callback);
      if (parentTree.right) {
        applyCallbackToTree(parentTree.right, callback);
      }
    } else if (parentTree.left === null && parentTree.right) {
      applyCallbackToTree(parentTree.right, callback);
    }
  };
  applyCallbackToTree(this, callback);

};

/*
 * Complexity: What is the time complexity of the above functions?
 */