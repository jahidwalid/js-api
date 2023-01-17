const numbers=[4, 6, 8, 10];

// 2. arry for push element
const output=[];

// 3. result for each element will be storad 
const doubleIt = number => number * 2;


// 1. loop through each element
for(const number of numbers){
    const result=doubleIt(number);
    output.push(result)
};

// console.log(output)


const newOutput=numbers.map(doubleIt);

// console.log(newOutput);



const squares=numbers.map(x => x * x);
console.log(squares)