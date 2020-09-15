const fs = require('fs');

fs.mkdir('wc/111/222', {recursive: true}, err => {
    if (err) {
        throw err;
    }
    console.log('mkdir success');

    // 递归删除
    fs.rmdir('wc', {recursive: true}, err => {
        if (err) {
            throw err;
        }
        console.log("rmdir success")
    });
});

