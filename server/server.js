const app = require('./app');
require('dotenv').config({
    path: process.env.NODE_ENV === "development"? ".env.development": ".env"
})

const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log('listening on port ', port))