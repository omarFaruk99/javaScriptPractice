let village = {
    villName: "pirpur",
    distict: "pabna",
    poputation: 5000,
    famousPeople: ["omar", "anik", "unknown"]

}

// console.log(village);
// console.log(typeof village);
// console.log(village.famousPeople[0])
console.log(village["poputation"]);
village["poputation"]=9999;
console.log(village.poputation);
console.log(village);
village.famousPeople.push("alamin");
console.log(village);
