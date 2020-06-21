const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const routes = express.Router();

const upload = multer(multerConfig);
const DistortController = require('./controllers/DistortController');

routes.get('/distort', upload.single('image'), DistortController);

module.exports = routes;