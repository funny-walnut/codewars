// Given the input as a string - Return the sum of the two variables as int

function theVar(theVariables) {
    let arr =theVariables.split('+');

    return arr[0].charCodeAt(0) + arr[1].charCodeAt(0) - (2 * ('a').charCodeAt(0) - 2);
}
console.log(theVar('d+g')); //11