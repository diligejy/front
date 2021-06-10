/*
ES6부터 JS의 표준 내장객체로 추가됨
ES6를 지원하는 브라우저나 Node.js에서 전역에 있는 Promise를 확인 가능
*/

// console.log(Promise);

/*
생성자를 통해서 Promise 객체를 만들 수 있음
생성자의 인자로 executor라는 함수 이용
*/

/*
executor 함수는 resolve와 reject를 인자로 가짐
(resolve, reject) => { ... }
resolve와 reject는 함수
resolve(), reject()
// */
// new Promise((resolve, reject) => {...});

// /* 
//  생성자를 통해서 프로미스 객체를 만드는 순간 pending(대기) 상태라고 함
// */

// /*
// executor 함수 인자 중 하나인 resolve 함수를 실행하면, fulfilled(이행) 상태가 됨
// */

// new Promise((resolve, reject) => {
//     // 
//     // ...
//     // resolve() => fulfilled
// })

// new Promise((resolve, reject) => {
//     reject(); //rejected
// })

/*
p라는 프로미스 객체는 1000ms 후에 fulfilled 됩니다.
*/

// new Promise((resolve, reject) => {
//     /*  pending*/
//     setTimeout(() => {
//         resolve(); /* fulfilled */
//     }, 1000);
// })

/*
p라는 프로미스 객체가 fulfilled 되는 시점에 p.then 안에 설정된 callback 함수가 실행
*/
// const p = new Promise((resolve, reject) => {
//     /*  pending*/
//     setTimeout(() => {
//         resolve(); /* fulfilled */
//     }, 1000);
// })

// p.then(()=> {
//     console.log('1000ms 후에 fulfilled 됩니다');
// })

/*
then을 설정하는 시점을 정확히하고,
함수의 실행과 동시에 프로미스 객체를 만들면서 pending이 시작하도록 하기 위해
프로미스 객체를 생성하면서 리턴하는 함수 (p)를 만들어 함수 (p) 실행과 동시에 then을 설정
*/

// function p() {
//     return new Promise((resolve, reject) => {
//         /*  pending*/
//         setTimeout(() => {
//             resolve(); /* fulfilled */
//         }, 1000);
//     });
// }

// p().then(() => {
//     console.log('1000ms 후에 fulfilled됩니다');
// })

/* 
프로미스 객체가 rejected 되는 시점에 p.catch 안에 설정한 callback 함수가 실행됨
*/
// function p() {
//     return new Promise((resolve, reject) => {
//         /*  pending*/
//         setTimeout(() => {
//             reject();
//         }, 1000);
//     });
// }

// p().then(() => {
//     console.log('1000ms 후에 fulfilled 됩니다.');
// }).catch(() => {
//     console.log('1000ms 후에 rejected 됩니다.');
// });

/*
executor의 resolve 함수를 실행할 때 인자를 넣어 실행하면, then의 callback 함수의 인자로 받을 수 있음
  resolve('hello');
  then((message) => {...})
*/

// function p() {
//     return new Promise((resolve, reject) => {
//         /*  pending*/
//         setTimeout(() => {
//             resolve('hello');
//         }, 1000);
//     });
// }

// p().then((message) => {
//     console.log('1000ms 후에 fulfilled 됩니다.', message);
// }).catch(() => {
//     console.log('1000ms 후에 rejected 됩니다.');
// });

/*
executor의 reject 함수를 실행할 때 인자를 넣어 실행하면, catch의 callback 함수의 인자로 받을 수 있음
  reject('error');
  catch((reason) => {...})
*/

// function p() {
//     return new Promise((resolve, reject) => {
//         /*  pending*/
//         setTimeout(() => {
//             reject(new Error('bad'));
//         }, 1000);
//     });
// }

// p().then((message) => {
//     console.log('1000ms 후에 fulfilled 됩니다.', message);
// }).catch((reason) => {
//     console.log('1000ms 후에 rejected 됩니다.', reason);
// });


/*
fulfilled 되거나 rejected 된 후에 최종적으로 실행할 것이 있다면, finally()를 설정하고 함수를 인자로 넣음
*/

// function p() {
//     return new Promise((resolve, reject) => {
//         /*  pending*/
//         setTimeout(() => {
//             reject(new Error('bad'));
//         }, 1000);
//     });
// }

// p().then((message) => {
//     console.log('1000ms 후에 fulfilled 됩니다.', message);
// }).catch((reason) => {
//     console.log('1000ms 후에 rejected 됩니다.', reason);
// }).finally(() => {
//     console.log('end');
// });

/*
보통 비동기작업을 할 때, callback 함수를 인자로 넣어 로직이 끝나면 callback 함수를 호출
이런 경우 함수가 아래로 진행되지 않고, callback 함수 안으로 진행됨
*/

// function c(callback) {
//     setTimeout(() => {
//         callback();
//     }, 1000);
// }

// c(() => {
//     c(() => {
//         c(() => {

//         });
//     });
// });

/*
then 함수에서 다시 프로미스 객체를 리턴하는 방법을 통해 체이닝하면, 비동기 작업을 순차적으로 아래로 표현할 수 있음
then에 함수를 넣는 여러가지 방법 확인
*/

// function p() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve();
//         }, 1000);
//     });
// }

// p().then(() => {
//     return p();
// })
// .then(() => p())
// .then(p)
// .then(() => {
//     console.log('4000ms 후에 fulfilled 됩니다');
// })

/*
value가 Promise 객체인지 아닌지 알 수 없는 경우, 사용하면 연결된 then 메서드를 실행
value가 Promise 객체면, resolve된 then 메서드를 실행
value가 Promise 객체가 아니면, value를 인자로 보내면서 then 메서드 실행
*/

// Promise.resolve(/* value */);

// Promise.resolve(new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('foo');
//     }, 1000);
// })).then((data) => {
//     console.log('프로미스 객체인 경우, resolve된 결과를 받아 then이 실행됨' , data);
// });

// Promise.resolve('bar').then(data => {
//     console.log('then 메서드가 없는 경우, fulfilled 됩니다.', data);
// })

/*
Promise.reject를 사용하면, catch로 연결된 rejected 상태로 변경됨
*/
// Promise.reject(/* value */)

// Promise.reject(new Error('reason')).then(error => {

// }).catch(error => {
//     console.log(error);
// });

/* 
프로미스 객체 여러 개를 생성하여,
배열로 만들어 인자로 넣고 Promise.all을 실행하면,
배열의 모든 프로미스 객체들이 fulfilled되었을 때, then의 함수가 실행됨
then의 함수의 인자로 프로미스 객체들의 resolve 인자값을 배열로 돌려줌
*/

// Promise.all([프로미스 객체들])

function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    })
}

Promise.all([p(1000), p(2000), p(3000)]).then((msg) => {
    console.log('모두 fulfilled 된 이후에 실행됩니다.', msg);
})

/* 
프로미스 객체 여러 개를 생성하여,
배열로 만들어 인자로 넣고 Promise.race 을 실행하면,
배열의 모든 프로미스 객체들 중 가장 먼저 fulfilled된 것으로, then의 함수가 실행됨
then의 함수의 인자로 가장 먼저 fulfilled된 프로미스 객체의 resolve 인자값을 리턴
*/

// Promise.race([프로미스 객체들])
function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    })
}

Promise.race([p(1000), p(2000), p(3000)]).then((msg) => {
    console.log('가장 빠른 하나가 fulfilled 된 이후에 실행됩니다.', msg);
})