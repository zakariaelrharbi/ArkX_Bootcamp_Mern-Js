function insertion(arr) {
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }
}

arr = [5, 1, 7, 9, 6, 2, 3, 10, 4, 15];
insertion(arr);
console.log(arr);