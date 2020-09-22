const fs = require('fs');
const readStream = fs.createReadStream('./app12.js', {encoding: 'utf-8'});

readStream.on('open', (fd) => {
    console.log(fd)
});

readStream.on('ready', () => {
    console.log('ready')
});

readStream.on('data', (data) => {
    console.log('end')
});

readStream.on('close', () => {
    console.log('close')
});

readStream.on('error', (error) => {
    console.log(error)
});