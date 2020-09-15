const fs = require('fs');

// 如下，rename、stat两个动作异步执行，可能rename还未成功，就执行stat，此时就会抛异常
// 正确做法：将stat放在rename回调中处理

fs.rename('test1.txt', 'test2.txt', function (error) {
    if (error) {
        return console.error(error);
    }
    console.log('rename file success');

    fs.stat('test2.txt', (error, stats) => {
        if (error) {
            console.log(error);
        }
        console.log(JSON.stringify(stats));
    });
});

