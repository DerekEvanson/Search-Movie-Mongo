const express = require('express');
const favoriteController = require('./../controllers/favoriteController');

const router = express.Router();

router.route('/').get(favoriteController.getAllFavorites);

router
  .route('/:id')
  .post(favoriteController.createFavorite)
  .delete(favoriteController.deleteFavorite);

module.exports = router;
