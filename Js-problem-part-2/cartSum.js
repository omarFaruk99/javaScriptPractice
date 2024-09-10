let obj = [
    { brand: "BMW", Price: 100, color: "black", quantity: 2 },
    { brand: "mercedes", Price: 500, color: "blue", quantity: 7 },
    { brand: "bently", Price: 400, color: "black", quantity: 5 },
    { brand: "rollsRoyce", Price: 300, color: "mezenda", quantity: 1 },
];


function carModel(carObjs) {
    let sum = 0;
    for(let i of carObjs){
        let modelTotalPrice =i.Price * i.quantity;
        sum = sum + modelTotalPrice;
        console.log("car-model: ",i.Price +"quantity: ",i.quantity)
    }
    return sum;
}

let carBrands = carModel(obj);
console.log(carBrands);


