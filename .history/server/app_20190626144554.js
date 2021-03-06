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

app.post('/api/post',(req,res)=>{
    res.json({
        message : 'post created scucessfully'
    });
});

app.post('/app/login',(req,res)=>{
    // Mock user
    const user = {
        id : 1,
        username : 'imtiaz',
        email : 'imtiazpak65@gmail.com'
    }
    
    jwt.sign({user : user}, 'secretkey', (err, token) =>{
       res.json({
           token
       })     
    })

})

app.listen(5000, ()=> console.log('server running successfully'));

