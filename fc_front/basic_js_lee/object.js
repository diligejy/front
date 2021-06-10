// 생성자 함수
// function A() {}

// const a = new A();

// console.log(a, typeof a);
// console.log(A());

// 생성하면서 데이터 넣기
// function B(name, age) {
//     console.log(name, age);
// }

// const b = new B();
// const c = new B('Mark', 37);

// console.log(B());

// 객체에 속성 추가 - property

// 값을 속성으로 넣기
// function A() {
//     this.name = 'Mark';
// }

// const a = new A(); // {name : 'Mark'}
// console.log(a);

// 함수를 속성으로 넣기

// function B() {
//     this.hello = function(){
//         console.log('hello');
//     }
// }

// (new B().hello());

// prototype
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.hello = function() {
//         console.log('hello', this.name, this.age);
//     }
// }

// Person.prototype.hello = function() {
//     console.log('hello', this.name, this.age);
// }

// const p = new Person('Mark', 37);
// p.hello();
// console.log(p.toString());
// console.log(Person.prototype);
// console.log(Person.prototype.toString);
// console.log(Person.prototype.constructor);
// console.log(Person.prototype.hello);

// console.log(Object.prototype);
// console.log(Object.prototype.toString);
// console.log(Object.prototype.constructor);

// console.log(p instanceof Person);
// console.log(p instanceof Object);

// prototype 상속
// function Person() {}

// Person.prototype.hello = function() {
//     console.log('hello');
// }

// function Korean(region) {
//     this.region = region;
//     this.where = function() {
//         console.log('where', this.region);
//     }
// }

// Korean.prototype = Person.prototype;

// const k = new Korean('Seoul');
// k.hello();
// k.where();

// console.log(k instanceof Korean);
// console.log(k instanceof Person);
// console.log(k instanceof Object);

// 객체 리터럴
// const a = {};

// console.log(a, typeof a);

// const b = {
//     name : "Mark"
// }

// console.log(b, typeof b);

// const c = {
//     name : 'Mark',
//     hello1(){
//         console.log('hello1', this);
//     },
//     hello2: function() {
//         console.log('hello2', this);
//     },
//     hello3: () => {
//         console.log('hello3', this);
//     }
// };

// c.hello1();
// c.hello2();
// c.hello3();

// 표준내장객체 : array
const a = new Array('red', 'black', 'white');
console.log(a, typeof a);
console.log(a instanceof Array);
console.log(a instanceof Object);

const b = ['red', 'green', 'yellow'];
console.log(b, typeof b);
console.log(a instanceof Array);
console.log(a instanceof Object);

console.log(b.slice(0, 1));
console.log(Array.prototype.slice, Object.prototype.slice);