// You are given two numbers a and b where 0 ≤ a ≤ b. Imagine you construct
// an array of all the integers from a to b inclusive.
//     You need to count the number of 1s in the binary representations
// of all the numbers in the array.

function rangeBitCount(a, b) {
    let summ = 0;

    for(let i = a; i <= b; i++) {
        let string1 = (i).toString(2);
        for (let j = 0; j < string1.length; j++) {
            if (string1[j] === '1') {
                summ += 1;
            }
        }
    }

    return summ;
}

console.log(rangeBitCount(2, 7)); //11
//the array is: [2, 3, 4, 5, 6, 7]. Converting
// the numbers to binary, we get [10, 11, 100, 101, 110, 111],
// which contains 1 + 2 + 1 + 2 + 2 + 3 = 11