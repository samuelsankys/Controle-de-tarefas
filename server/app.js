const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors');

// IMPORTS ROUTES
const ListRoutes = require('./api/routes/list.routes');
const ActivitiesRoutes = require('./api/routes/activities.routes');


app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE', 'OPTIONS');
    next();
});

// ROUTES
app.use(ListRoutes);
app.use(ActivitiesRoutes);


module.exports = app;