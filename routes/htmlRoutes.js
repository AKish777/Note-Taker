const express = require('express');
const htmlRoute = express.Router();
const path = require('path');

htmlRoute.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

htmlRoute.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '../public/notes.html')));

module.exports = htmlRoute;