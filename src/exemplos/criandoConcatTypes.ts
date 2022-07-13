type input = number | string;

function concatValue(input1: input, input2: input) {
    if(typeof input1 === 'string' || typeof input2 === 'string') {
        return input1.toString() + input2.toString();
    } else {
        return input1 + input2;
    }
}

console.log(concatValue(1, " LAB 30/05/2022"));
console.log(concatValue(2, " LAB 20/06/2022"));
console.log(concatValue(3, " LAB 11/07/2022"));

//outros testes

console.log(concatValue(10, 5));
console.log(concatValue(10, "5"));
console.log(concatValue(1, "5"));
