const express = require('express');
const viewsController = require('./../controllers/viewsController');

const router = express.Router();

router.get('/', viewsController.getHome);
router.post('/results', viewsController.getResults);
router.get('/movie/:movieID', viewsController.getMovie);
router.get('/favorites', viewsController.getFavorites);

module.exports = router;
