// if (true) {
//     console.log('항상 실행');
// }

// if (false) {
//     console.log('항상 실행 안됨');
// }

// 블럭에 코드가 한줄이면 중괄호 {}는 생략 가능
// if (true) console.log("항상 실행");


// const n = 15;

// if (n % 3 === 0) {
//     console.log('n은 3의 배수 입니다');
// } else if (n % 5 === 0) {
//     console.log('n은 5의 배수 입니다');
// } else {
//     console.log('n은 3의 배수도 아니고, 5의 배수도 아닙니다.');
// }

// // n이 3의 배수이면서 5의 배수이면?
// if (n % 3 === 0 && n % 5 === 0){
//     console.log('n은 15의 배수입니다');
// } else if (n % 3 === 0) {
//     console.log('n은 3의 배수입니다');
// } else if (n % 5 === 0){
//     console.log('n은 5의 배수입니다');
// } else {
//     console.log('n은 3의 배수도 아니고, 5의 배수도 아닙니다');
// }

// // n % 3 === 0 && n % 5 === 0의 값은 반복되므로 변수나 상수에 넣음
// const multipleOfThree = n % 3 === 0;
// const multipleOfFive = n % 5 === 0;

// if (multipleOfThree && multipleOfFive){
//     console.log('n은 15의 배수입니다');
// } else if (multipleOfThree) {
//     console.log('n은 3의 배수입니다');
// } else if (multipleOfFive){
//     console.log('n은 5의 배수입니다');
// } else {
//     console.log('n은 3의 배수도 아니고, 5의 배수도 아닙니다');
// }


// && 표현식
// 앞 표현식을 평가해서 참일 때만 뒤 표현식을 평가할 필요가 생기고 뒤 표현식 실행
// let n = 5;
// n % 5 === 0 && console.log('5로 나누어 떨어질 때만 실행');

// 삼항 연산자
// let n = 5;
// console.log(n % 5 === 0 ? '5의 배수입니다' : '5의 배수가 아닙니다');

// 표현식의 결과를 변수에 할당 가능
// const message = n % 5 === 0 ? '5의 배수입니다' : '5의 배수가 아닙니다';
// console.log(message);

// switch

let n = 5;

switch(n) {
    default:{
        console.log(n);
    }
}

// n을 5로 나누었을 때 나머지 0일 경우 실행
switch(n % 5){
    case 0: {
        console.log('5의 배수입니다');
    }
    default:{
        console.log(n);
    }
}


// n을 5로 나누었을 때 나머지 0일 경우 실행 - default 실행 안함
switch(n % 5){
    case 0: {
        console.log('5의 배수입니다');
    }
    default:{
        console.log(n);
    }
}