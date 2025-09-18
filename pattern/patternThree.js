const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter a number: "));

// ! Upper part of dimond
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
        process.stdout.write("  ");
    }
    for (let j = 1; j <= i; j++) {
        process.stdout.write("* ");
    }
    for (let j = i - 1; j >= 1; j--) {
        process.stdout.write("* ");
    }
    console.log();
}

// ! Lower part of dimond
for (let i = n - 1; i >= 1; i--) {
    for (let j = 1; j <= n - i; j++) {
        process.stdout.write("  ");
    }
    for (let j = 1; j <= i; j++) {
        process.stdout.write("* ");
    }
    for (let j = i - 1; j >= 1; j--) {
        process.stdout.write("* ");
    }
    console.log();
}
