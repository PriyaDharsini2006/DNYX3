function multiplyByTen(myArray) {
    const resultArray = myArray.map(element=>element*10)
    return resultArray;
}
const input1 = [12, 2, 2, 4, 1];
const output1 = multiplyByTen(input1);
console.log("Sample Output 1:", output1);


function filterEvenNumbers(myArray) {
    const resultArray = myArray.filter(element => element % 2 === 0)
    return resultArray;
}
const input2 = [12, 5, 7, 8, 3, 2];
const output2 = filterEvenNumbers(input2);
console.log("Sample Output 1:", output2);