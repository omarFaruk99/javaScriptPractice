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
// let revArray = [];
// for (let i = 0; i < persons.length; i++) {
//     console.log(persons[i]);
//     revArray.unshift(persons[i]);
// }
// console.log(revArray);

// let country = ["BD", "Afganistan","Germany","USA","Uk"];
// let numbers = [2,5,44,33,20,11,7];

// console.log(country.sort())
// console.log(numbers.sort())


let carBrand = ["BMW", "Mercedes", "Lamborgini", "RolsRoyce", "Toyota"];

let revCar = [];

for (let i = carBrand.length - 1; i >= 0; i--) {
    revCar.push(carBrand[i])
    console.log(revCar);
}
