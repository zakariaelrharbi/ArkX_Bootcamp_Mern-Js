// Bubble Sort is a simple comparison-based sorting algorithm that repeatedly steps through the list, 
// compares adjacent elements, and swaps them if they are in the wrong order.

function bubblesort(arr) {
    // Outer loop : this is for looping to the whole array
    for (let i = 0; i < arr.length - 1; i++) {
        // arr.length - i - 1 : we don't need to compare elements that are already in their correct sorted positions
        // inner loop: this loop is for swapping
        for (let j = 0; j < arr.length - i - 1; j++){
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

let arr = [8, -1, 7, -100, -1000, 1000, 10, 15];
bubblesort(arr);
console.log(arr);