/* **
*first100 = 100;
* second100 = 90;
* Above200 = 50;
*/

function multiDiscount(quantity) {
    let first100Price = 100;
    let from101To200Price = 90;
    let above200Price = 50;
    if (quantity <= 100) {
        let totalPrice = quantity * first100Price;
        return totalPrice;
    } else if (quantity >= 101 && quantity <= 200) {
        let price0To100 = first100Price * 100;
        let remainQuantity = quantity - 100;
        let remainPrice = remainQuantity * from101To200Price;
        return (price0To100 + remainPrice);
    } else {
        let price0To100 = first100Price * 100;
        let price101To200 = from101To200Price * 100;
        let remainQuantity = quantity - 200;
        let remainPrice = remainQuantity * above200Price;
        return (price0To100 + price101To200 + remainPrice);
    }

}

let discount = multiDiscount(500);
console.log(discount);