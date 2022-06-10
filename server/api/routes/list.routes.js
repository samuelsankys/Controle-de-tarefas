const { routes } = require('../../app');
const controller = require('../controllers/list.controllers');
const router = require('express').Router();


routes.get('/', controller.getAll);