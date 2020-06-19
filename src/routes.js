const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const routes = express.Router();

const upload = multer(multerConfig);

routes.get('/upload', upload.single('image'), (req, res) => {
    return res.json({
        message: 'Image uploaded'
    });
});

module.exports = routes;