function evenReturn(arr) {
    let oddArray = [];
    const evenArray = [];
    let oddSum = 0;
    let evenSum = 0;
    for (let x of arr) {
        if (x % 2 === 0) {
            evenArray.push(x)
            evenSum = evenSum + x;
        } else {
            oddArray.push(x);
            oddSum = oddSum + x;
        }
    }
    return { evenArray, oddArray,evenSum,oddSum };
}

let z = [2, 4, 6, 3, 7, 5];
let result = evenReturn(z);
console.log("return even number: ", result.evenArray);
console.log("return even sum: ", result.evenSum);
console.log("odd number: ", result.oddArray);
console.log("odd number: ", result.oddSum);