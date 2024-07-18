
/**
 * rest paramaters
 */
const logger = (a, b, ...params) => {
    console.log(params);
};

logger(1, 2, 3, 4, "5");

const rest = ({age, email, ...rest}) => {
    // console.log(a);
    console.log(rest);
}

rest({
    a: "quan",
    b: "18",
    age: "18",
    email: "quanhv@lsd.vn"
})


const restArr = ([c, a, b, ...rest]) => {
    // console.log(a);
    // console.log("Value: " + rest);
    console.log(a);
    console.log(b);
    console.log(c);
}

restArr([12, 13, 15, 17, 18, 19])

/**
 * Spread
 */

const arr1 = ['A', 'B', 'C'];
const arr2 = ['D', 'E', 'F'];
const ten = 123;
const arr3 = [...arr1, ten]
console.log(arr3);


const obj1 = {
    name: "Quan",
    age: 18,
}
const obj2 = {
    class: "12A2",
    name: "Hieu"
};
const email1 = "Quanhv@lsd.vn";
// const obj3 = {...obj2, ...obj1}
// const obj3 = {...obj2, ...obj1, email: "Quanhv@lsd.vn"}
const obj3 = {...obj2, ...obj1, email1}
console.log(obj3);

/**
 * Destructoring
 */

let number = 13;
let string = '14';

console.log(number + string);
console.log(number - string);
console.log(number * string);
// console.log(number + string);

const a = 0
const b = undefined
const c = null
const d = NaN
const e = '' 
// const f = "" 

if truthy => display
else null -> 0
     undefined -> 0
if(b){

} else {

}

if(a){

}
