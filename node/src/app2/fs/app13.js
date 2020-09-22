const fs = require('fs');
const readStream = fs.createReadStream('./app12.js', {encoding: 'utf-8'});
const writeStream = fs.createWriteStream('./test.js', {encoding: 'utf-8'});

readStream.on('data', (data) => {
    writeStream.write(data, () => {
        console.log(data)
    });
});