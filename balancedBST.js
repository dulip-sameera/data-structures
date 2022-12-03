const sort = require("./mergeSort");

function node(data, left, right) {
  return {
    data,
    left,
    right,
  };
}

function balancedBST(array) {
  const root = _buildTree(array);

  function _buildTree(array) {
    let tunedArray = _removeDuplicates(_sort(array));

    return _arrayToBST(tunedArray, 0, tunedArray.length - 1);
  }

  function _sort(array) {
    sort(array, 0, unsorted.length - 1);
    return array;
  }

  function _removeDuplicates(array) {
    let temp = [...array];
    for (let i = 0; i < temp.length - 1; i++) {
      if (temp[i] === temp[i + 1]) {
        temp.splice(i + 1, 1);
      }
    }

    return temp;
  }

  function _arrayToBST(array, start, end) {
    // if node gets to a leaf node
    if (start > end) return null;

    // get the middle
    const mid = parseInt((start + end) / 2);

    const root = node(array[mid]);
    root.left = _arrayToBST(array, start, mid - 1);
    root.right = _arrayToBST(array, mid + 1, end);

    return root;
  }

  return {
    getRoot() {
      return root;
    },
  };
}

const unsorted = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
// console.log(unsorted);
// console.log(balancedBST(unsorted).getRoot());
const tree = balancedBST(unsorted).getRoot();
prettyPrint(tree);

// util function
function prettyPrint(node, prefix = "", isLeft = true) {
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
}
