//For in
let triangle = {a: 1, b: 2, c: 3};

function ColoredTriangle() {
    this.color = 'red';
}

ColoredTriangle.prototype = triangle;

let obj = new ColoredTriangle();
for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
        console.log(`obj.${prop} = ${obj[prop]}`);
    }
}
console.log('\n');


//For of
//Let because the variable is changing
let iterable = [10, 20, 30];
for (let value of iterable) {
    value += 1;
    console.log(value);
}
console.log('\n');

//Const because the variable doesn't change
for (const value of iterable) {
    console.log(value);
}
console.log('\n');

//Iterating a string
const iterable1 = 'boo';
for (const value of iterable1) {
    console.log(value);
}
