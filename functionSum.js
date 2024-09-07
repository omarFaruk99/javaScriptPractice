function sum(numbers) {
    console.log("in function");
    let add = 0;
    for (let i = 0; i < numbers.length; i++) {
        add = add + numbers[i];
    }
    return add;
}

let x = [10, 11, 9, 20];
console.log(sum(x));