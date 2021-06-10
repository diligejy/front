// Promise 객체를 리턴하는 함수

// function p(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(ms);
//         }, ms);
//     });
// }

// // Promise 객체를 이용해서 비동기 로직 수행

// p(1000).then(ms => {
//     console.log(`${ms} ms 후에 실행됨.`);
// })

// // Promise 객체를 리턴하는 함수를 await으로 호출하는 방법

// const ms = await p(1000);
// console.log(`${ms} ms 후에 실행됨.`);



// await을 사용하는 경우 항상 async 함수 안에서 사용되어야 함

// function p(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(ms);
//         }, ms);
//     });
// }

// (async function main() {
//     const ms = await p(1000);
//     console.log(`${ms} ms 후에 실행됨.`);    
// })();

// Promise 객체가 rejected된 경우의 처리를 위해
// try catch를 이용

// function p(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // resolve(ms);
//             reject(new Error('reason'));
//         }, ms);
//     });
// }

// (async function main() {
//     try {
//         const ms = await p(1000);
//     } catch(error) {
//         console.log(error);   
//     }
// })();

// async function에서 return 되는 값은
// Promise.resolve 함수로 감싸서 리턴

// function p(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // resolve(ms);
//             reject(new Error('reason'));
//         }, ms);
//     });
// }

// async function asyncP() {
//     return 'Mark';
// }


// (async function main() {
//     try {
//         const name = await asyncP(1000);
//         console.log(name);
//     } catch(error) {
//         console.log(error);   
//     }
// })();


//

// function p(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(ms);
//             // reject(new Error('reason'));
//         }, ms);
//     });
// }

// async function asyncP() {
//     const ms = await p(1000);
//     return 'Mark';
// }


// (async function main() {
//     try {
//         const name = await asyncP(1000);
//         console.log(name);
//     } catch(error) {
//         console.log(error);   
//     }
// })();


// reject 사례
// function p(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // resolve(ms);
//             reject(new Error('reason'));
//         }, ms);
//     });
// }

// async function asyncP() {
//     const ms = await p(1000);
//     return 'Mark';
// }


// (async function main() {
//     try {
//         const name = await asyncP(1000);
//         console.log(name);
//     } catch(error) {
//         console.log(error);   
//     }
// })();

// finally
function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(ms);
            reject(new Error('reason'));
        }, ms);
    });
}

async function asyncP() {
    const ms = await p(1000);
    return 'Mark';
}


(async function main() {
    try {
        const name = await asyncP(1000);
        console.log(name);
    } catch(error) {
        console.log(error);   
    } finally {
        console.log('end')
    }
})();
