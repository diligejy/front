// // 초기화 하면서 선언된 변수를 중괄호 안 반복 블럭에서 사용 가능
// for (let i = 0; i < 5; i++){
//     console.log('안녕하세요', i);
// }

// for(let i =0, j= 5; i <5; i ++){
//     console.log('안녕하세요', i, j);
// }

// for (let i = 0, j = 2; i < 5; i ++, j = j * j){
//     console.log('안녕하세요', i, j);
// }

// // 반복문을 즉시 종료하고 싶을 때는 break;
// for (let i=0; i < 5; i++){
//     console.log(i);
//     if (i > 2){
//         break;
//     }
//     console.log('안녕하세요', i);
// }

// 반복되는 블럭 안에서 continue;를 만나면 거기서 해당 블럭은 종료
// 그리고 이와같이 반복이 있으면 다음 반복으로 넘어감
// for (i = 0; i < 5; i++){
//     console.log(i);
//     if (i < 2) {
//         continue;
//     }
//     console.log('안녕하세요', i);
// }

// for of 
for (const i of [1, 2, 3]){
    console.log(i);
}

// for in 
Object.prototype.test = function() {};

for (const i in {a : 1, b:2, c:3}){
    console.log(i);
}