//Recursive merge sorting function
function mergeSort(arr) {
  let leftArr = [];
  let rightArr = [];
  if (arr.length <= 1) return arr;
  else {
    const mid = Math.floor(arr.length / 2);
    arr.forEach((elem, index) => {
      index < mid ? leftArr.push(elem) : rightArr.push(elem);
    });
    leftArr = mergeSort(leftArr); //Recursive call for left and right arrays
    rightArr = mergeSort(rightArr);
    return merge(leftArr, rightArr);
  }
}

// Merging function
function merge(leftArr, rightArr) {
  const resArr = [];
  let lPointer = 0;
  let rPointer = 0;
  // Pushing min values into resulting array from two arrays
  while (lPointer < leftArr.length && rPointer < rightArr.length) {
    if (leftArr[lPointer] <= rightArr[rPointer]) {
      resArr.push(leftArr[lPointer]);
      lPointer++;
    }
    if (rightArr[rPointer] <= leftArr[lPointer]) {
      resArr.push(rightArr[rPointer]);
      rPointer++;
    }
  }
  // Pushing remained values
  while (lPointer < leftArr.length) {
    resArr.push(leftArr[lPointer]);
    lPointer++;
  }
  while (rPointer < rightArr.length) {
    resArr.push(rightArr[rPointer]);
    rPointer++;
  }

  return resArr;
}
//Testing
const arrayToSort = [22, 5, -10, 54, 63, 40, 88, 1, 99, 18, 77];

console.log('Initial array to sort: ', arrayToSort);
console.log('Sorted array: ', mergeSort(arrayToSort));
