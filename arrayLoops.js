let books = ["bangla", "english", "math", "Physics", "chemistry", "biology"];

// for (let i = 0; i < books.length; i++) {
//     let x = books[i];
//     if (i === 0) {
//         console.log((i + 1) + "th array: " + x)
//     } else if (i !== 0) {
//         console.log((i + 1)+ "th array: " + x)
//     }

// }
let n = 0;
while (n < books.length) {
    console.log(n+"th array: "+books[n]);
    n++;
}