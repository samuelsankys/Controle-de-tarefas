const express = require('express');
const app = express();
const router = express.Router();

// IMPORTS ROUTES
const ListRoutes = require('./api/routes/list.routes');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE');
    next();
});

// ROUTES
app.use(ListRoutes);
//app.use('/', index);


module.exports = app;