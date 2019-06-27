var localStrategy = require("passport-local").Strategy;

// var mysql = require('mysql');
var connnection = require('../database_config/connection');
var bcrypt = require('bcrypt-nodejs');
// var dbconfig = require('./database');
// var connnection = mysql.createConnection(dbconfig.connnection);
// var passport = require('passport');

// connnection.query('USE' + dbconfig.database);

module.exports = function(passport){
    passport.use('asd', new localStrategy(
        function(username, password, done) {
          console.log("helloooo");
          return done(null, "asd");
        }));
}   