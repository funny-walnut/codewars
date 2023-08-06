// A Tidy number is a number whose digits are in non-decreasing order.
//
//     Task
// Given a number, Find if it is Tidy or not .

function tidyNumber(n){
    arr = String(n).split('').map(Number);

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr [i-1]) return false;
    }
    return true;
}

console.log(tidyNumber(7245627)); //false
console.log(tidyNumber(1245679)); //true
