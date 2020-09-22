const fs = require('fs');

fs.appendFile('info.txt', 'my info wc', 'utf8', function (error) {
    if (error) {
        return console.error(error);
    }
    console.log('append success');

});