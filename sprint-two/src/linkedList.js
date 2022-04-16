var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  //o(1)
  list.addToTail = function(value) {

    var newNode = Node(value);

    //set your head and tail
    if (list.head === null) {
      list.head = newNode;
    } else {
      var currentTail = list.tail;
      currentTail.next = newNode;
    }
    list.tail = newNode;
  };

  //o(1)
  list.removeHead = function() {

    var oldHead = list.head;
    var newHead = list.head.next;
    list.head = newHead;
    return oldHead.value;
  };


  //o(n)
  list.contains = function(target) {
    var found = false;
    //keep iterating over the list starting from the  head until it reaches the last element
    var currentNode = list.head;
    while (currentNode !== null) {
      if (currentNode.value === target) {
        found = true;
        break;
      }
      currentNode = currentNode.next;
    }
    return found;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
