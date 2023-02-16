const express = require('express');
const router = express.Router();

const moviesController = require('../Controllers/movies.controller.ts');

router.get('/findallmovies', moviesController.findAllMoviesController);

module.exports = router;
