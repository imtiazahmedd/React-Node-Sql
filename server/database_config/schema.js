const connection = require('./connection.js');

connection.connect((err) => {
    if(err){
        console.log({err});
        return;
    }
    console.log('connected successfully');
    /**
     * Create Schema
     */
    module.exports = connection;
});

