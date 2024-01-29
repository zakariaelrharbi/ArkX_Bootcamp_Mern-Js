// Define the number of rows for the tree
let numRows = 4;

// Outer loop for each row
for (let i = 0; i < numRows; i++) {
    // Inner loop for spaces before the stars
    for (let j = 0; j < numRows - i - 1; j++) {
        process.stdout.write(" ");
    }

    // Inner loop for printing stars
    for (let k = 0; k < 2 * i + 1; k++) {
        process.stdout.write("*");
    }

    // Move to the next line after each row
    process.stdout.write("\n");
}
