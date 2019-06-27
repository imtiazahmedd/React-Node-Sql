const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
var passport = require('passport');
app.get('/api',(req, res)=>{
    res.json({
        message : 'Hello world'
    });
});


app.post('api/asd', (req, res)=>{
    res.json({asd:"asdas"})
})

app.post('/api/post', verifyToken, (req,res)=>{
    res.json({message: "Post created successfully", authData: req.authData});
});

// app.post('/api/login',(req,res)=>{
    

//     jwt.sign({user}, 'secretkey', {expiresIn : '2d'}, (err, token) =>{
//        res.json({
//            token
//        })     
//     })

// })

app.post('api/login',
  passport.authenticate('local-login'),
  function(req, res) {
    jwt.sign({user}, 'secretkey', {expiresIn : '2d'}, (err, token) =>{
        res.json({
            token
        })     
     })
  });


//   app.post('api/register',
// //   passport.authenticate('local-signup'),
//   function(req, res) {
//         console.log(res,'register response###')
//   });


//Format of token
//Autherization: Bearer <access_token>

// Verify token
function verifyToken(req, res, next){
    //Get auth header value
    const bearerHeader = req.header('Authorization');
    // check if bearer is undefined
    if(typeof bearerHeader !== 'undefined'){
        // split at the space
        const bearer = bearerHeader.split(' ');
        // Get token from array
        const bearerToken = bearer[1];
        // set the token
        req.token = bearerToken;

        jwt.verify(bearerToken, 'secretkey', (err, authData)=>{
            if(err){
                return  res.sendStatus(403);
            }
            req.authData = authData;
            // next middleware
            next();
        });
    }
}

app.listen(5000, ()=> console.log('server running successfully'));

