// 함수 먼저
function hello1(){
    console.log('hello1');
}

hello1();

// 함수 호출 먼저

// hello3();

// var hello3 = function (){
//     console.log('hello2');
// }
// //var 익명 함수 hoisting의 문제 
// hello2(); //선언부인 var name;가 끌어올려지는 호이스팅문제 => hello2 is not a function 

// var hello2 = function (){ //실제로는 hello2 = function(){}의 형태가됨 
//     console.log('hello2') 
// }

hello4();

const hello4 = () => {
    console.log('hello4');
}