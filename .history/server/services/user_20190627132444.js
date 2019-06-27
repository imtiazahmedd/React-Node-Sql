var localStrategy = require("passport-local").Strategy;

// var mysql = require('mysql');
var connnection = require('../database_config/connection');
var bcrypt = require('bcrypt-nodejs');
// var dbconfig = require('./database');
// var connnection = mysql.createConnection(dbconfig.connnection);
// var passport = require('passport');

// connnection.query('USE' + dbconfig.database);

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

    passport.use(
        // 'local-signup',
        
        new localStrategy(
        //     {
        //     usernameField : 'username',
        //     passwordField : 'password',
        //     passReqToCallback : true
        // },
        function(req, username, password, done){
            console.log("helooo")
            connnection.query("SELECT * FROM users WHERE username = ? ",
            [username],function(err,rows){
                if(err) {
                    console.log(err);
                    return done(err);
                }
                if(rows.length){
                    return done(null, false, req.flash('signupMessage', 'That is already taken'));
                }else{
                    var newUserMysql = {
                        username: username,
                        password : bycrypt.hashSync(password, null, null)
                    };

                    var insertQuery = "INSERT INTO users (username, password) values (?, ?)";

                    connnection.query(insertQuery, [newUserMysql.username, newUserMysql.password],
                        function(err,rows){
                            if(err) {
                                console.log(err);
                                return done(err);
                            }
                            newUserMysql.id = rows.insertId;
                            return done(null, newUserMysql);
                        });
                }
            })
        })
    );
    // passport.use(
    //     'local-login',
    //     new localStrategy({
    //         usernameField: 'username',
    //         passwordField : 'password',
    //         passReqToCallback : true
    //     },
    //     function(req, username, passport, done){
    //         connnection.query("SELECT * FROM user WHERE username = ? " , [username],
    //             function(err, rows){
    //                 if(err)
    //                 return done(err);
    //                 if(!rows.length){
    //                     return done(null, false, req.flash('loginMessage', 'No user found'));
    //                 }
    //                 if(!bcrypt.compareSync(password, rows[0].password))
    //                 return done(null, false, req.flash('loginMessage','wrong password'));

    //                 return done(null, rows[0]);
                    
    //             }
    //         )
    //     }
    //     )
    // )
}   