/* 
* The average of the odd numbers in an array
*/

function oddAver(arr) {
    let sum = 0;
    let count = 0;
    for (let i of arr) {
        // console.log(i);
        if (i % 2 === 1) {
            sum = sum + i;
            count++;
        }
    }
    console.log("sum: ", sum + " count: ", count);
    return sum / count;
}


let array = [3,5,6,8,9,11,12];
let ave = oddAver(array);
console.log("The average of odd Number: ", ave);
