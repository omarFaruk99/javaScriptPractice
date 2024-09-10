function parameterCheck(para){
    
    if(Array.isArray(para) === false){
        return "Please enter arry";
    }
    return para;
}

let obj = {name:"omar",age:28,city:"dhaka",salary:1000};
let arr = [2,5,3,90,50];
let fun = parameterCheck(arr);
console.log("omar salary: ",fun);