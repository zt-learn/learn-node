//setInterval(function () {
//    console.log('heh');
//}, 1000);

setTimeout(function () {
        console.log('test');
        clearInterval();
    }, 5000
);

setInterval(function () {
    console.log('1');
}, 1000, 'a');