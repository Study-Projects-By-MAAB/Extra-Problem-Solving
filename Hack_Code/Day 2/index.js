/* 
Problem : 
Find the palindrome of a given string/number

Sample input:
madam
alia
Sample output:
true
false
*/
const str1 = "madam"
const str2 = "alia"

function checkPalindrome(string) {
    const splitedStr = string.split("")
    let revStr = [];
    for (let i = 0; i < splitedStr.length; i++) {
        revStr.unshift(splitedStr[i])
    }
    const newStr = revStr.join("")

    if (newStr === string) {
        return true
    }
    else {
        return false
    }
}

console.log(checkPalindrome(str1));
console.log(checkPalindrome(str2));