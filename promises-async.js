// Using Promises - 

console.log('a');
console.log('b');

const promise1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('c'), 3000
    })
})

const promise2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('d'), 0
    })
})

Promise.all([promise1,promise2])
.then((results) => {
    results.forEach((result) => {
        console.log(result);
    })
})
const printE = async() => {
    const printC = await promise1;
    const printD = await promise2;
    return 'e';
}

printE().then((letter) => {
    console.log(letter);
})
.catch((error) => {
    console.log(error);
})