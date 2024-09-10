function add(num1, num2) {
    const addition = num1 + num2;
    return addition;
}
function sub(num1, num2) {
    const subtruction = num1 - num2;
    return subtruction;
}
function multi(num1, num2) {
    const multiply = num1 * num2;
    return multiply;
}
function division(num1, num2) {
    const divide = num1 / num2;
    return divide;
}

function calculator(num1, num2, operation) {

    if (typeof num1 !== "number" && typeof num2 !== "number") {
        return "1st input and 2nd input should be 'number'"
    }
    else if (typeof operation !== "string") {
        return "please enter string like 'add','sub','multi','division' what operation you want?";

    } else if (operation === "add") {
        return add(num1, num2);
    } else if (operation === "sub") {
        return sub(num1, num2);
    } else if (operation === "multi") {
        return multi(num1, num2);
    } else if (operation === "division") {
        return division(num1, num2);
    } else {
        return "1st & 2nd input should be 'number' and then 3rd input should be operation like 'add','sub','multi','division' "
    }
}

let cal = calculator(10, 7, 'sub');
console.log(cal);