//Write an arrow function which returns the product of two numbers -

const productWithoutCurrying = (x,y) => {
    return `Product without currying = ${x * y}`;
}

console.log(productWithoutCurrying(4,5));

const productWithCurrying = (x) => {
    return (y) => {
        return `Product with currying = ${x * y}`;
    }
}

console.log(productWithCurrying(2)(3));

//Create a student object -

const student = {
    name : "Prakhar",
    age : 26,
    greet : function () {
        console.log(`Hi, I am ${this.name} and my age is ${this.age}`);
    }
}

student.greet();