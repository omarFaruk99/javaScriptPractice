let x = 1;
let maxNum = 10;
let evenSum = 0;
let oddSum = 0;

while (x <= 20) {
    console.log("x value is: " + x);
    // even 
    if (x % 2 === 0) {
        console.log("even number: " + x)
        console.log("sum of even number: " + (evenSum =evenSum + x))
    }
    x++;
}
console.log("finsihed th code");