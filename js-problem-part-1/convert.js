function inchFeet(inch) {
    let feet = inch * 0.083;
    let fit = parseInt(feet);
    let inc = inch % 12;
    console.log("My height:",typeof fit+" feet" +" inch:",inc);
}

inchFeet(70);