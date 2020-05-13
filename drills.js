const Queue = require('../mod18check6/QueueDrills');

/* eslint-disable no-redeclare */
function binarySearch(array, value, start, end) {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;

  if (start > end) {
    return -1;
  }

  const index = Math.floor((start + end)/2);
  const item = array[index];

  console.log(start, end);
  if(item === value) {
    return index;
  } else if (item < value) {
    return binarySearch(array, value, index + 1, end);
  } else if (item > value) {
    return binarySearch(array, value, start, index -1);
  }
}

class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key,
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  dfs(values=[]) {
    if (this.left) {
      values = this.left.dfs(values);
    }
    values.push(this.values);

    if (this.right) {
      values = this.right.dif(values);
    }
    return values;
  }

  bfs(tree, values = []) {
    const queue = new Queue();
    const node = tree.root;
    queue.enqueue(node);
    while (queue.length) {
      const node = queue.dequeue();
      values.push(node.value);

      if (node.left) {
        queue.enqueue(node.left);
      }

      if (node.right) {
        queue.enqueue(node.right);
      }
    }
    return values;
  }
}


//Drill 1. How Many Searches?