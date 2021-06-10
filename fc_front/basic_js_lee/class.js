// // class
// // 선언적 방식

// class A {

// }

// console.log(new A());

// // class 표현식을 변수에 할당
// const B = class {};

// console.log(new B());

// 선언적 방식이지만 호이스팅은 일어나지 않음
// new C();

// class C {};

// Constructor

// class A{}
// console.log(new A());

// class B {
//     constructor(){
//         console.log('constructor');
//     }
// }
// console.log(new B());

// class C {
//     constructor(name, age){
//         console.log('constructor', name, age);
//     }
// }

// console.log(new C('Mark', 37));
// console.log(new C());

// // 멤버 변수
// class A{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }

// console.log(new A('Mark', 37));

// // class field는 런타임 확인
// class B{
//     name;
//     age;
// }

// console.log(new B());

// class C {
//     // 초깃값 설정
//     name = 'no name';
//     age = 0;

//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// console.log(new C('Mark', 37));

// 멤버 함수
// class A {
//     hello1() {
//         console.log('hello1', this);
//     }
    
//     hello2 = () => {
//         console.log('hello2', this);
//     }
// }

// new A().hello1();
// new A().hello2();

// class B {
//     name = 'Mark'
    
//     hello() {
//         console.log('hello', this.name);
//     }
// }

// new B().hello();

// get, set

// class A {
//     _name = 'no name';

//     get name(){
//         return this._name + '@@@';
//     }

//     set name(value){
//         this._name = value + '!!!';
//     }
// }

// const a = new A();
// console.log(a);
// a.name = 'Mark'; // set함수
// console.log(a)
// console.log(a.name);
// console.log(a._name);


// // readonly
// class B{
//     _name = 'no name';

//     get name(){
//         return this._name + '@@@';
//     }
// }

// const b = new B();
// console.log(b);
// b.name = 'Mark';
// console.log(b);

// static 변수, 함수

// class A {
//     static age = 37;
//     static hello() {
//         console.log(A.age);
//     }
// }

// console.log(A, A.age);
// A.hello();

// class B {
//     age = 37;
//     static hello() {
//         console.log(this.age);
//     }
// }

// console.log(B, B.age);
// B.hello();
// new B().hello();

// class C {
//     static name = '이 클래스의 이름을 C가 아니다.'
// }

// console.log(C);

// 상속 기본
// class Parent {
//     name = 'Lee';

//     hello(){
//         console.log('hello', this.name);
//     }
// }

// class Child extends Parent {}

// const p = new Parent();
// const c = new Child();
// console.log(p, c);

// c.hello();
// c.name = 'Anna';
// c.hello();

// 변수 함수 추가 및 오버라이딩

// class Parent {
//     name = 'lee';

//     hello() {
//         console.log('hello', this.name);
//     }
// }

// class Child extends Parent {
//     age = 37;

//     hello() {
//         console.log('hello', this.name, this.age);
//     }
// }

// const p = new Parent();
// const c = new Child();

// console.log(p, c);
// c.hello();
// c.name = 'Anna';
// c.hello();

// super
// class Parent {
//     name;

//     constructor(name){
//         this.name = name;
//     }

//     hello(){
//         console.log('hello', this.name);
//     }
// }

// class Child extends Parent {
//     age;
//     // 부모 constructor 먼저 -> super()
//     constructor(name, age){
//         super(name);
//         this.age = age;
//     }

//     hello(){
//         console.log('hello', this.name, this.age);
//     }
// }

// const p = new Parent('Mark');
// const c = new Child('Mark', 37);

// console.log(p, c);
// c.hello();

// static 상속
class Parent {
    static age = 37;
}

class Child extends Parent{}

console.log(Parent.age, Child.age);