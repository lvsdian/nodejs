const fs = require('fs');

fs.unlink('test2.txt',  (error) => {
    if (error) {
        console.log(error);
    }
    console.log('unlink file success');
});