const express = require('express');
const router = express.Router();

module.exports = () => {
    const connection = require('../database_config/schema.js');
    // router.post('/post', (req, res, next) =>{

    // }, 
    // (req, res, next) => {

    // });

    router.post('/post', (req, res, next) =>{
        res.status(200).send({
            name: 'Hello'
        });
    });

    return router;
}