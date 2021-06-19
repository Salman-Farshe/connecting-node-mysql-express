let faker = require('faker');

// randomly 500 email
for(let i = 0; i <= 500; i++){
    let randomEmail = faker.internet.email();
    let randomDate = faker.date.past();
    console.log(randomEmail);
    console.log(randomDate);
}

// connecting to mysql
const mysql = require('mysql2');
//const Connection = require('mysql2/typings/mysql/lib/Connection');

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '^)!)*',
    database : 'join_us'
});

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
 });

var q = 'SELECT CURTIME() as time, CURDATE() as date, NOW() as now';
connection.query(q, function (error, results, fields) {
    if (error) throw error;
    console.log(results[0].time);
    console.log(results[0].date);
    console.log(results[0].now);
});

connection.end();