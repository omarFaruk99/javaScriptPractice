/*
*remove duplicate items from an array 
 */

function removeDup(arr) {
    // console.log(arr)
    let unique = [];
    for (let i of arr) {
        if (unique.includes(i) === false) {
            unique.push(i);
        }
    }
    return unique;
}



let array = ["omar", "anik", "omar", "alamin", "anik", "russel", "alamin", "robin"];
console.log(removeDup(array));