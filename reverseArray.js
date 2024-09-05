let persons = ["omar", "Nirob", "alamin", "anik", "robin", "russel"];

// use reverse method
// console.log(typeof(persons.reverse()));

// of loop
// let reverseArr = [];
// for (let x of persons) {
//     console.log(x);
//     reverseArr.unshift(x)
// }
// console.log(reverseArr);

// for loop
let revArray = [];
for (let i = 0; i < persons.length; i++) {
    console.log(persons[i]);
    revArray.unshift(persons[i]);
}
console.log(revArray);