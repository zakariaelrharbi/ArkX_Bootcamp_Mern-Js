function binarySearch(arr, value) {
    let first = 0;
    let last = arr.length - 1;

    while (first <= last) {
        let middle = Math.floor((first + last) / 2);
        let x = arr[middle];
        if (x < value) {
            first = middle + 1;
        }
        else if (x > value) {
            last = middle - 1;
        }else{
            return middle;
        }
    }
    return -1;
}

const arr = [1, 2, 3, 4, 5, 100];
const result = binarySearch(arr, 7);
console.log(result);