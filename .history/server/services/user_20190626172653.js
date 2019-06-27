var localStrategy = require("passport-local").Strategy;

var mysql = require('mysql');
var bcrypt = require('bcrypt-node.js');
var dbconfig = require('./database');
var connnection = mysql.createConnection(dbconfig.connnection);

connnection.query('USE' + dbconfig.database);

module.exports = function(passport){
    passport.serializeUser(function(user,done){
        done(null, user.id);
    });


    passport.deserializeUser(function(id,done){
        connnection.query("SELECT * FROM users WHERE id = ? ", [id],
        function(err, rows){
            done(err, rows[0]);
        });
    });

}   