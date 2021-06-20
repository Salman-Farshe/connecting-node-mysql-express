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


/*
    To count the number of users in the database:
*/
const total_Count = 'SELECT COUNT(*) AS total FROM USERS';
connection.query(total_Count, function(error, results, fields){
    if(error) throw error;
    console.log(results[0].total);
});


/* 
    To insert data into the database using node.js:
*/
// let insert_data = "INSERT INTO USERS(email) VALUES('salmanfarshe@gmail.com'),('farshesalman@gmail.com')";
// connection.query(insert_data, function(error, results, fields){
//     if(error) throw error;
//     console.log(results);
// });


/*
    Inserting data part 2:
*/
let person = {
    email: faker.internet.email(),   // fake email data
    created_at: faker.date.past()
};
connection.query('INSERT INTO USERS SET ?', person, function(error, results, fields){
    if(error) throw error;
    console.log(results);
});


/* 
    Inserting 5000 data part 3:
*/
let data = [];
for(let i = 0; i <= 500; i++){
    data.push([
        faker.internet.email(), 
        faker.date.past()
    ]);
}

let data_query = 'INSERT INTO USERS(email, created_at) VALUES ?';
connection.query(data_query, [data], function(error, results, fields){
    if(error) throw error;
    console.log(results);
});


// express
let express = require('express');
const { response } = require('express');
let app = express();

app.get("/", function(req, res){
    console.log(req); // to see clients all data
    res.send("welcome to home page");
});

app.get("/users", function(req, res){
    // find total users in database
    let total = "SELECT COUNT(*) AS count FROM USERS";
    connection.query(total, function(error, results, fields){
        if(error) throw error;
        let t = results[0].count;
        // respond with that number
        res.send("We have total  " + t + "  users");
    });
});


app.listen(5500, function(){
    console.log('server starting at 5500');
});


//connection.end();