/* Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0
str_count(); // returns 1
str_count("Hello", 'l'); // returns 2
str_count("", 'z'); // returns 0 */

// -------------------------------------------------

// console.log(str_count());
console.log(str_count("Hello", 'o'));
console.log(str_count("Hello", 'l'));
console.log(str_count("", 'z'));

function str_count(str, char) {
    let count = 0;
    for (const ind of str) {
        if (ind.includes(char)) {
            count++
        }
    }
    return count
}