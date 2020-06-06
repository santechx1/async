const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Success async'), 3000)
            : reject(new Error('Failue'))
    });
};

const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something);
}

console.log('Before 1');
doSomething();
console.log('After 2');

const doSomething2 = async () => {
    try {
        const something = await doSomethingAsync();
        console.log(something);
        
    } catch (err) {
        console.error(err);

    }
}
console.log('Before 1');
doSomething2();
console.log('After 2');
