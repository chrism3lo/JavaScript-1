//VERY HARD: Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /) and another number, 
// and then uses the functions created in the hard challenge to output the value in sentence form.
// Example output: "3 + 4 = 7"


let n1 = prompt('Please enter a number for the calculation.');
let input =prompt('Please enter a "+, -, *, /" for the corresponding math function.');
let n2 = prompt('Please enter a number for the calculation.');

if (input === '+'){
// Add
function add(a,b){
    
    return Number(a) + Number(b);
}
let result = add(Number(n1),Number(n2));

alert(`The answer of ${n1} + ${n2} is ${result}`);

} else if (input === '-'){
    function minus(a,b){
    
        return Number(a) - Number(b);
    }
    let result = minus(Number(n1),Number(n2));
    
    alert(`The answer of ${n1} - ${n2} is ${result}`);
} else if (input === '*'){
    function multiply(a,b){
    
        return Number(a) * Number(b);
    }
    let result = multiply(Number(n1),Number(n2));
    
    alert(`The answer of ${n1} * ${n2} is ${result}`);
} else if (input === '/'){
    function divide(a,b){
    
        return Number(a) / Number(b);
    }
    let result = divide(Number(n1),Number(n2));
    
    alert(`The answer of ${n1} / ${n2} is ${result}`);
} else {
    alert('Please enter one of the four simple math functions.')
}
