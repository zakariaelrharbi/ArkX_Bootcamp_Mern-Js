// Selection Sort is a simple sorting algorithm that works 
// by repeatedly finding the minimum element from the unsorted part of the array 
// and putting it at thebeginning

function selection(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j
            }
        }
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
}


arr = [8, 1, 7, 100, 6, 2, 9, 1000, 10, 15];
selection(arr);
console.log(arr);