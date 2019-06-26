// const bodyParser = require('body-parser');
// const express = require('express')
// const app = express();

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Authorization, Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

// const userRouter = require('./routes/user')();


// //middleware handle for routing
// app.use('/', userRouter);

// app.listen(3000, ()=>{
//     console.log('api is running 3000');
// });



const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.get('/api',(req, res)=>{
    res.json({
        message : 'Hello world'
    });
});

app.post('/api/post', verifyToken, (req,res)=>{
    res.json({
        message : 'post created scucessfully'
    });
});

app.post('/api/login',(req,res)=>{
    console.log(req,'rrrr')
    // Mock user
    const user = {
        id : 1,
        username : 'imtiaz',
        email : 'imtiazpak65@gmail.com'
    }
    
    jwt.sign({user}, 'secretkey', (err, token) =>{
       res.json({
           token
       })     
    })

})

//Format of token
//Autherization: Bearer <access_token>

// Verify token
function verifyToken(req, res, next){
    //Get auth header value
    const bearerHeader = req.header['autherization'];
    // check if bearer is 
}


app.listen(5000, ()=> console.log('server running successfully'));

