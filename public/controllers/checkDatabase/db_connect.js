const mysql = require('mysql')

const db = mysql.createConnection({
    host:'localhost',
    database:'njs_calcul',
    user:'root',
    password:''
})

db.connect((err) =>{
    if(err){
        console.log(err.message)
    }
    else{
        console.log('Connecté !');
    }
})

exports.db = db;
