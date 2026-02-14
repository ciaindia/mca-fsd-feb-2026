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

// const getSqr = (x) => {
//     console.log(x * x);
// }

// getSqr(5)
// getSqr(6)
// getSqr(7)

// //CW: Design a function add to print addition
// const add = (x, y) => {
//     console.log(x + y);
// }




// const sub = (x, y) => {
//     console.log(x - y);
// }

// const calc = (a, b, op) => {
//     op(a, b)        // add(5, 6)
// }
// calc(5, 6, add)
// calc(5, 6, sub)


// const wish = () => {
//     console.log("Happy New Year");
// }

// setTimeout(() => {
//     console.log("Happy New Year");
// }, 10000)


// let cnt = 0;

// setInterval(() => {
//     console.log(cnt++);
// }, 1000)

//CW: ClearInterval after 5 seconds

let nums = [1, 2, 3, 4, 5]
let sum = 0;

for(let i = 0; i < nums.length; i++) {
    sum = sum + nums[i]
}

console.log(sum);
//CW:WAP to print square of all elements of array
//and assign it to new array

// sqr_arr = []

// for(let i = 0; i < nums.length; i++)
//     sqr_arr.push(nums[i] * nums[i])

// console.log(`Sqr Arr: ${sqr_arr}`);

// sqr_arr = nums.map(x => x * x)
// console.log(sqr_arr);

//CW: WAP to find cube of all elements
//CW: WAP to find even numbers of array using filter function
// even_arr = nums.filter(x => x % 2 == 0)
// console.log(even_arr);

members = [
    {name: "Amit", age: 23},
    {name: "Sumit", age: 19},
    {name: "Suresh", age: 22},
]

allowed_members = members.filter((m) => {
    return m.age >= 21
})

console.log(allowed_members);
