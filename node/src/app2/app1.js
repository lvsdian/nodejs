/*
    Node操作文件系统是通过一个重要的原生模块来实现的：fs
    对于fs中的绝大多数api来说，node都提供了相同功能的两个版本：同步版本/异步版本

    对于同步版本与异步版本来说，其在方法的命名上存在一个规则
    xxx(异步)
    xxxSync(同步)

    尽最大可能去使用异步版本
 */
const fs = require('fs');

// 同步
try {
    const data = fs.readFileSync('test1.txt', 'utf8');
    console.log(data);
} catch (e) {
    console.log(e);
}

// 异步
fs.readFile('test1.txt', 'utf8', function (error, data) {
    if (error) {
        console.log(error);
        console.log("error occurred");
    } else {
        console.log(data)
    }
});

fs.writeFile('test1.txt', "my test nodejs", function (error) {
    if (error) {
        console.log(error);
    }
});

// 追加的方式来写
fs.writeFile('test2.txt', "my test nodejs\r\n", {flag:'a+'}, function (error) {
    if (error) {
        console.log(error);
    } else {
        console.log("write file success");
    }
});