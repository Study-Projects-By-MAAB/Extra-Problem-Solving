const string = "javascript"
const char = "a"

function countChar(string, char) {
    let count = 0
    for (const alph of string) {
        if (alph === char) {
            count++
        }
    }
    return count
}

const result = countChar(string, char);
console.log(result);