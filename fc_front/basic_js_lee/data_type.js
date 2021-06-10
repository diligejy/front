// Boolean

// const isTrue = true;
// const isFalse = false;

// console.log(isTrue, typeof isTrue);
// console.log(isFalse, typeof isFalse);

// null
// const a = null;
// console.log(a, typeof a);

// Undefined
// let b;
// console.log(b, typeof b);

// b = undefined
// console.log(b, typeof b);

// if (a == b){
//     console.log(a == b);
// }

// if (a === b){
//     console.log(a === b);
// }

// Number
// const a = 37;

// console.log(a, typeof a);

// const b = 96.7;

// console.log(b, typeof b);

// const c = NaN;

// console.log(c, typeof c);

// String
// const a = 'Mark';

// console.log(a, typeof a);

// const b = 'Mark' + 'Lee';

// const c = a + 'Lee';

// console.log(c, typeof c);

// Template String (ES6)
// const d = `${a} Lee`;
// console.log(d, typeof d); 


// Symbol(ES6)
const a = Symbol(); // new 붙이면 안됨
const b = Symbol(37);
const c = Symbol('Mark');
const d = Symbol('Mark'); // c와 d는 다름

console.log(a, typeof a);
console.log(c === d);