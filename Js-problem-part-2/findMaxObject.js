let obj = [
    { brand: "BMW", Price: 100, color: "black" },
    { brand: "mercedes", Price: 200, color: "blue" },
    { brand: "bently", Price: 550, color: "black" },
    { brand: "rollsRoyce", Price: 500, color: "mezenda" },
];


function carBrand(carDetails) {
    let maxPrice = carDetails[0]
    for(let i of carDetails){
        if(i.Price < maxPrice.Price){
            maxPrice = i;
        }
    }
    return maxPrice;
}

let aboutCar = carBrand(obj);
console.log(aboutCar);