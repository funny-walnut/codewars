// The pair of integer numbers (m, n), such that 10 > m > n > 0, (below 10), that its sum, (m + n), and rest, (m - n), are perfect squares, is (5, 4).
//
//     Let's see what we have explained with numbers.
//
// 5 + 4 = 9 = 3²
// 5 - 4 = 1 = 1²
// (10 > 5 > 4 > 0)
// The pair of numbers (m, n), closest to and below 50, having the property described above is (45, 36).
//
// 45 + 36 = 81 = 9²
// 45 - 36 = 9 = 3²
// (50 > 45 > 36 > 0)

function closestPairTonum(n) {
    for (let max = n - 1; max > 0; max--) {
        for(let min = max-1; min > 0; min--) {
            let summ = min + max;
            let diff = max - min;

            if (
                Math.sqrt(diff)-Math.trunc(Math.sqrt(diff)) === 0
                && Math.sqrt(summ)-Math.trunc(Math.sqrt(summ)) === 0
            ){
                return [max, min];
            }
        }
    }
}

console.log(closestPairTonum(10)); //[5, 4];
console.log(closestPairTonum(30)); //[29, 20];
console.log(closestPairTonum(50)); //[45, 36];
