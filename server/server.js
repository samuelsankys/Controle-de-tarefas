const app = require('./app');
const sequelize = require('./config/database');

require('dotenv').config({
    path: process.env.NODE_ENV === "development"? ".env.development": ".env"
})

const port = process.env.PORT || 3000;

( async ()=>{
    try {
        await sequelize.sync(
            {force: false}
        );
        app.listen(port, ()=> console.log('listening on port ', port))
    } catch (error) {
        console.error(error);
    }
})()