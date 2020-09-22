const fs = require('fs');

fs.realpath('app1.js', (error, resolvePath) => {
    if (error) {
        throw error;
    }
    console.log(resolvePath);
});