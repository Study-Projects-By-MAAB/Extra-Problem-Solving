/* 
Problem: Find the sum of digits from a given number

Sample input:
437
Sample output:
14
 */

const sumOfDigits = (digits) => {
    let sum = 0
    for (const num of digits.toString()) {
        sum += parseInt(num)
    }
    console.log(sum)
}

sumOfDigits(437)
