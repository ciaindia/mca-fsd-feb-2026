// let x = 10;
// console.log(`X = ${x}`);

// const PI = 3.14; 
// console.log(`PI = ${PI}`);




// function getSqr(x) {
//     console.log(x * x);
// }

// const getSqr = function (x) {
//     console.log(x * x);
// }

const getSqr = (x) => {
    console.log(x * x);
}

getSqr(5)
getSqr(6)
getSqr(7)

//CW: Design a function add to print addition
const add = (x, y) => {
    console.log(x + y);
}

const calc = (a, b, op) => {
    op(a, b)        // add(5, 6)
}
calc(5, 6, add)




