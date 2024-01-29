function linearSearch(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (value == arr[i]) {
            return i;
        } 
    }
    return -1;
}

const arr = [8, 1, 7, 100, 6, 2, 9, 1000, 10, 15];
const result = linearSearch(arr, 15)
console.log(result);