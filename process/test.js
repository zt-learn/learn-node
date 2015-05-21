process.on('hehe', function () {
    console.log('he ni ma bi');
});

process.emit('hehe');

console.log(process.env['path']);

console.log(process.env['path'].split(';'));
