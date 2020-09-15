const fs = require('fs');

fs.access('app0.js', (error) => {
    if (error) {
        throw error;
    }
    console.log('success');
});