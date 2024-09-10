let numbers = [20, 5, -30, 7, 1];
let biggest= 0;
for (let i of numbers) {
    if (i > biggest) {
        biggest = i;
    }
}
console.log(biggest);
