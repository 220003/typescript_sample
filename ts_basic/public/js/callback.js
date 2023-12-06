"use strict";
//ランダムな数字を出力
function handleRandom(count) {
    const randomNumber = Math.random();
    const message = `${count}: ${randomNumber}`;
    console.log(message);
}
// main
function start(callback) {
    var count = 0;
    const timer = setInterval(() => {
        count++;
        if (count >= 5)
            clearInterval(timer);
        callback(count);
    }, 1000);
}
//run main
start(handleRandom);
//Unit Test
// handleRandom(1);
