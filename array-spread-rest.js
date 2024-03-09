const arr = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];

const transformedArray = arr.map((element) => {
    if(element === ' ')
    {
        return 'empty string';
    }
    return element;
})

console.log(transformedArray);