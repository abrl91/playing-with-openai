const express = require('express');
const {createImageCtrl} = require('../controllers/image.ctrl');

const imageRouter = express.Router();

const createImageRouter = imageRouter.post('/create-image', createImageCtrl);

module.exports = {
    createImageRouter
}