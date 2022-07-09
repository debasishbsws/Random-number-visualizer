const fs = require('fs')

let i = 0;

while (i < 100000) {
    let num = Math.random() * 2147483647;
    let content = parseInt(num, 10).toString();
    fs.appendFile("jsrandom.txt", content + '\n', (err) => {
        if (err) {
            console.log(err);
        }
    });
    i++;
}




// fs.writeFile('jsrandom.txt', content, err => {
//     if (err) {
//         console.error(err)
//         return
//     }
    //file written successfully
// })