
// function writeCards(["John", "Diane", "Jay"], "birthday") {
//    for (let i = 0; i <= 2; i++) {
//    return [`Thank you, ${array[i]}, for the wonderful ${event} gift!`];
//     }
// }
function writeCards(names, event) {
    let messages = [];
    for(let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return messages;
}


// To get more acquainted with `while`, your task is to write a function,
// `countDown`, that takes in any positive integer and, starting from that number,
// counts down to zero using `console.log()`. Note that this means that running
// `countDown(10);` would actually log _11_ times:


function countDown(positiveNumber) {
    while(positiveNumber >= 0 ) {
        console.log(positiveNumber--);
    }
}


