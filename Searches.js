const Queue = require('../mod18check6/QueueDrills');
const BinarySearchTree = require('../mod18check8/BinarySearchTree');
/* eslint-disable no-redeclare */
function binarySearch(array, value, start, end) {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;

  if (start > end) {
    return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];

  console.log(start, end);
  if (item === value) {
    return index;
  } else if (item < value) {
    return binarySearch(array, value, index + 1, end);
  } else if (item > value) {
    return binarySearch(array, value, start, index - 1);
  }
}

// class BinarySearchTree {
//   constructor(key = null, value = null, parent = null) {
//     this.key = key,
//     this.value = value;
//     this.parent = parent;
//     this.left = null;
//     this.right = null;
//   }

//   dfs(values=[]) {
//     if (this.left) {
//       values = this.left.dfs(values);
//     }
//     values.push(this.values);

//     if (this.right) {
//       values = this.right.dif(values);
//     }
//     return values;
//   }

//   bfs(tree, values = []) {
//     const queue = new Queue();
//     const node = tree.root;
//     queue.enqueue(node);
//     while (queue.length) {
//       const node = queue.dequeue();
//       values.push(node.value);

//       if (node.left) {
//         queue.enqueue(node.left);
//       }

//       if (node.right) {
//         queue.enqueue(node.right);
//       }
//     }
//     return values;
//   }
// }


//Drill 1. How Many Searches?

// 1.1) 12, 6, 8  found

// 1.2) 12, 17, 14, 15 return -1 item not found

// console.log(binarySearch([3, 5, 6, 8, 11, 12, 14, 15, 17, 18], 16));

// Drill 3.

// 600.123

// look at the first number in the data set. We see that first number is 6, we would then ignore anything that is  > 700 and < 600, in other words narrow our search to all things 600-699. Then we would look at the second number. We see that the second number 0 so we narrow our search again to include only items that start with 60 (aka 600 - 609). Then we look at 3rd number and we see that it is 0 so we narrow our search to only items that fall in to the 600 range aga (600.000 - 600.999). keep cycling through the number until we get to the last digit and then return the title of the book found at that location.

// 000 -> 990 startingIndex: 6-- -> binarySearch(lib, start = 0 -> dewey, )

function findBook(arr, dewey, title, start, end) {
  start = start === undefined ? 0 : start;
  end = end === undefined ? arr.length : end;
  if(start > end) {
    return -1;
  }
  
  const index = Math.floor((start + end) / 2);
  const item = arr[index];  
  if(item.title === title) {
    return index;
  } else if (item.dewey < dewey) {
    return findBook(arr, dewey, title, index+1, end);
  } else if (item.dewey > dewey) {
    return findBook(arr, dewey, title, start, index - 1);
  } else {
    return findBook(arr, dewey, title, start, --end)
  }
  
}

const library = [
  { author: 'Cowlishaw, Mike', dewey: '005.133', title: 'The REXX Language' },
  { author: 'Sams', dewey: '005.133', title: 'Teach Yourself C++ In 21 Days' },
  { author: 'Stroustrup., Bjarne', dewey: '005.133', title: 'The C++ Programming Language' },
  { author: 'Crockford, Douglas', dewey: '005.2762', title: 'JavaScript: The Good Parts' },
  { author: 'Flanagan, David', dewey: '005.2762', title: 'JavaScript: The Definitive Guide' },
  { author: 'Schmidt, Meinhard', dewey: '005.44684', title: 'Windows Vista for Dummies' },
  { author: 'Zondervan', dewey: '220.52081', title: 'NIV Study Bible' },
  { author: 'Humphries, Russell, Dr.', dewey: '231.7652', title: 'Starlight and Time' },
  { author: 'Jane, Frederick Thomas', dewey: '623.82509051', title: 'Jane\'s Fighting Ships' },
  { author: 'Norris, Chuck', dewey: '796.8092', title: 'The Official Chuck Norris Fact Book' }
];

console.log(findBook(library, '005.133', 'The REXX Language'));

// we find the right book, because we aren't morons.



// Drill 4.

// 3.1) 14, 19, 15, 27, 25, 79, 90, 91, 89, 35

// 3.2) 8, 6, 5, 7, 10, 9, 11

// Drill 5.

const rufus = new BinarySearchTree();

rufus.insert(25);
rufus.insert(15);
rufus.insert(50);
rufus.insert(10);
rufus.insert(24);
rufus.insert(35);
rufus.insert(70);
rufus.insert(4);
rufus.insert(12);
rufus.insert(18);
rufus.insert(31);
rufus.insert(44);
rufus.insert(66);
rufus.insert(90);
rufus.insert(22);

function dfsPreOrder(tree) {
  // Pre-order
  console.log(tree.key);
  if (tree.left) {
    dfsPreOrder(tree.left);
  }
  if (tree.right) {
    dfsPreOrder(tree.right);
  }
}

function dfsInOrder(tree) {
  if (tree.left) {
    dfsInOrder(tree.left);
  }
  console.log(tree.key);
  if (tree.right) {
    dfsInOrder(tree.right);
  }
}

function dfsPostOrder(tree) {
  if (tree.left) {
    dfsPostOrder(tree.left);
  }
  if (tree.right) {
    dfsPostOrder(tree.right);
  }
  console.log(tree.key);
}


// console.log('The PreOrder is:')
// dfsPreOrder(rufus);
// console.log('The PostOrder is:')
// dfsPostOrder(rufus);
// console.log('The InOrder is:')
// dfsInOrder(rufus);

// Drill 6.

let command = new BinarySearchTree();

command.insert(20, 'Captain Picard');
command.insert(9, 'Commander Riker');
command.insert(21, 'Commander Data');
command.insert(23, 'Lt. Cmdr. Crusher');
command.insert(22, 'Lieutenant Selar');
command.insert(10, 'Lt. Cmdr. LaForge');
command.insert(8, 'Lt. Cmdr. Worf');
command.insert(7, 'Lieutenant security-officer');

// console.log(command.bfs(command));


// Drill 7.

let prices = [128, 97, 121, 123, 98, 97, 105];

let maxProfit = function (prices) {
  let minimum;
  let diff = 0;

  for (let i = 0; i < prices.length; i++) {
    if (i === 0) {
      minimum = prices[i];
    }

    if (minimum > prices[i]) {
      minimum = prices[i];
    }

    if (minimum < prices[i]) {
      let newDiff = prices[i] - minimum;
      if (newDiff > diff) {
        diff = newDiff;
      }
    }
  }
  return diff;
};

// console.log(maxProfit(prices));

let days = [128, 97, 121, 123, 98, 97, 105];

function maxProfit2(arr) {
  let diffs = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      diffs.push(arr[j] - arr[i]);
    }
  }
  return Math.max(...diffs);
}

// console.log(maxProfit2(days));
