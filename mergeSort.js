//merge sort
function mergeSort(arr) {
  return mergeSortHelper(arr, 0, arr.length - 1);
}

function mergeSortHelper(arr, start, end) {
  if (start === end) return [arr[start]];
  let middle = Math.floor((start + end) / 2);
  let leftArr = mergeSortHelper(arr, start, middle);
  let rightArr = mergeSortHelper(arr, middle + 1, end);

  leftArr.push(Infinity);
  rightArr.push(Infinity);
  let l = leftArr.length + rightArr.length - 2;
  let li = 0;
  let ri = 0;

  let merged = [];
  while (li + ri < l) {
    if (leftArr[li] <= rightArr[ri]) {
      merged.push(leftArr[li]);
      li++;
    } else {
      merged.push(rightArr[ri]);
      ri++;
    }
  }

  return merged;
}

let arr1 = [34, 4546, 32, 3, 2, 8, 6, 76, 56, 45, 34, 566, 1];
console.log(arr1);
console.log(mergeSort(arr1));
