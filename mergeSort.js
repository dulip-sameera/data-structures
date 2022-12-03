function mergeSort(array, lb, ub) {
  if (lb < ub) {
    const mid = parseInt((lb + ub) / 2);
    mergeSort(array, lb, mid);
    mergeSort(array, mid + 1, ub);
    merge(array, lb, mid, ub);
  }
}

function merge(array, lb, mid, ub) {
  // creating left array
  const L = [];
  // creating right array
  const R = [];

  // getting element count for temporary left array
  const nL = mid - lb + 1;
  // getting element count for temporary right array
  const nR = ub - mid;

  // assigning values to left array
  for (let i = 0; i < nL; i++) {
    L[i] = array[lb + i];
  }
  // assigning values to right array
  for (let j = 0; j < nR; j++) {
    R[j] = array[mid + 1 + j];
  }

  // compare left array element against right array element
  // assign the lowest element from them to the array

  // left array initial value
  let i = 0;
  // right array initial value
  let j = 0;
  // sorted array initial value
  let k = lb;

  while (i < nL && j < nR) {
    if (L[i] <= R[j]) {
      array[k] = L[i];
      i++;
    } else {
      array[k] = R[j];
      j++;
    }
    k++;
  }

  // assign remaining elements of left array to array
  while (i < nL) {
    array[k] = L[i];
    i++;
    k++;
  }
  // assign remaining elements of right array to array
  while (j < nR) {
    array[k] = R[j];
    j++;
    k++;
  }
}

module.exports = mergeSort;
