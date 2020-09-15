// 自定义module，用exports关键字将对象、方法导出，以便其他的文件中使用
var myInfo = {
    name: 'zhangsan',
    age: 20
};
 var myFunction = function (inputNumber) {
     return inputNumber * 5;
 };

 // 将myInfo、myFunction从当前文件中导出，导出的名字叫myInfo、myFunction
 exports.myInfo = myInfo;
 exports.myFunction = myFunction;
