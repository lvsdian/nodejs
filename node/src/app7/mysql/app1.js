const mysql = require('mysql');
const uuid = require('uuid');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'book'
});

connection.connect((error) => {
    if (error) {
        console.log(error);
        throw error;
    } else {
        console.log('connection successful');

        const id = uuid.v1();
        const name = "《活着》";
        const author = "myself";
        const price = "12.34";
        const sales = 9999;
        const stock = 0;
        const img_path = "abc.png";
        connection.query('insert into t_book set  ?', {
            id: id,
            name: name,
            author: author,
            price: price,
            sales: sales,
            stock: stock,
            img_path: img_path
        }, (error, result) => {
            if (error) {
                console.log('insert error occurred: ' +error);
                throw error;
            } else {
                console.log('insert successful，result:');
                console.log(result);
            }
            connection.query('select * from t_book', (error, result) => {
                if (error) {
                    console.log('query error occurred: ' +error);
                    throw error;
                } else {
                    console.log("data：");
                    console.log(result);
                    // 关闭连接
                    connection.end((error) => {
                        if (error) {
                            console.log('end error occurred');
                            throw error;
                        } else {
                            console.log('end successful');
                        }
                    })
                }
            });
        });
    }
});