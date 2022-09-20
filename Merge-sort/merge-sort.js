//Recursive merge sorting function
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const m = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, m);
  const rightArr = arr.slice(m);
  return merge(mergeSort(leftArr), mergeSort(rightArr)); //Merging recursive call for left and right arrays
}

// Merging function
function merge(leftArr, rightArr) {
  const resArr = [];
  let lP = 0;
  let rP = 0;
  // Pushing min values into resulting array from two arrays
  while (lP < leftArr.length && rP < rightArr.length) {
    if (leftArr[lP] <= rightArr[rP]) {
      resArr.push(leftArr[lP]);
      lP++;
    }
    if (rightArr[rP] <= leftArr[lP]) {
      resArr.push(rightArr[rP]);
      rP++;
    }
  }
  // Pushing remained values
  while (lP < leftArr.length) {
    resArr.push(leftArr[lP]);
    lP++;
  }
  while (rP < rightArr.length) {
    resArr.push(rightArr[rP]);
    rP++;
  }

  return resArr;
}
//Testing
const arrayToSort = [22, 5, -10, 54, 63, 40, 88, 1, 99, 18, 77];

console.log('Initial array to sort: ', arrayToSort);
console.log('Sorted array: ', mergeSort(arrayToSort));
