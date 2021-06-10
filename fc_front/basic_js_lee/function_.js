function hello1(){
    console.log('Hi')
}

console.log(hello1, typeof hello1);

function hello2(name){
    console.log(`hello2 ${name}`);
}

hello2('hi');

const hello = function() {
    console.log('hi')
}

hello();



const test = () => {
    console.log('test');
}
test();
