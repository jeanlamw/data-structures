// Instantiate a new graph
var Graph = function() {


  //create a storage
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {

  this.storage[node] = [];

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {

  //declare a variable
  var doesContainNode = false;

  if (this.storage[node] !== undefined) {
    doesContainNode = true;
  }
  return doesContainNode;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {


  for (let i = 0; i < this.storage[node].length; i++) {
    var currentEdge = this.storage[node][i];
    var indexOfRemovedNode = this.storage[currentEdge].indexOf(node);
    this.storage[currentEdge].splice(indexOfRemovedNode, 1);
  }


  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.storage[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].push(toNode);
  this.storage[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // in the fromNode's array, want to find the index where the toNode is
  var indexOfToNode = this.storage[fromNode].indexOf(toNode); //index 1
  //update the array using splice
  this.storage[fromNode].splice(indexOfToNode, 1);

  // from the toNode's array, want to find the index where the fromNode is
  var indexOfFromNode = this.storage[toNode].indexOf(fromNode); //index 2
  //update the array using splice
  this.storage[toNode].splice(indexOfFromNode, 1);

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  var nodes = Object.keys(this.storage);

  nodes.forEach(function(currentNode) {
    cb(currentNode);
  });

};

/*
 * Complexity: What is the time complexity of the above functions?
 */


