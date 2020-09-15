const myModule2 = {
    myInfo: {
        name: 'zhangsan',
        age: 20
    },
    myFunction: function (inputNumber) {
        return inputNumber + 8;
    }
};
// 将myModule整体导出来
module.exports = myModule2;