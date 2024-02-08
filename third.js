/* You will be given a string (x) featuring a cat 'C', a dog 'D' and a mouse 'm'. The rest of the string will be made up of '.'.

You need to find out if the cat can catch the mouse from its current position. The cat can jump at most (j) characters, and cannot jump over the dog.

So:

if j = 5:

..C.....m...D returns 'Caught!' <-- not more than j characters between the cat and the mouse

.....C............m......D returns 'Escaped!' <-- as there are more than j characters between the two, the cat cannot jump far enough

if j = 10:

...m.........C...D returns 'Caught!' <-- Cat can jump far enough and jump is not over dog

...m....D....C....... returns 'Protected!' <-- Cat can jump far enough, but dog is in the way, protecting the mouse

Finally, if not all three animals are present, return 'boring without all three' */
// -----------------------
const j = 5;
console.log(caughtMouse("..C.....m...D", j));
console.log(caughtMouse(".....C............m......D", j));
console.log(caughtMouse("...m.........C...D", j));
console.log(caughtMouse("...m....D....C.......", j));

function caughtMouse(x, j) {
    if (x.indexOf('D') < x.indexOf('C') && x.indexOf('D') > x.indexOf('m')) {
        return "Protected!"
    }
    if (x.indexOf('D') > x.indexOf('C') && x.indexOf('D') < x.indexOf('m')) {
        return "Protected!"
    }

    if (j = 5) {
        if (x.indexOf('C') < x.indexOf('m')) {
            if ((x.indexOf('m') - x.indexOf('C')) <= j + 1) {
                return "Caught!"
            }
            else {
                return "Escaped!"
            }
        }
    }
    if (j = 10) {
        if (x.indexOf('C') > x.indexOf('m')) {
            if ((x.indexOf('C') - x.indexOf('m')) <= j) {
                return "Caught!"
            }
            else {
                return "Escaped!"
            }
        }
    }
}