const mysql = require('mysql');

db = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password : '',
    database : 'coffeeshop'
})

db.connect((err)=>{
    if(err) throw err
    else{
        console.log('DatabaseConneted')
    }
})

module.exports = db;