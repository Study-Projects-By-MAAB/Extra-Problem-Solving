
setInterval(() => {
    let arr = Math.random().toString().slice(2, 8).split('')
    const arr2 = [...arr]
    const fh = arr.splice(0, 3).join('')
    const lh = arr2.splice(3, 3).join('')
    console.log(fh + '-' + lh);
}, 1000)