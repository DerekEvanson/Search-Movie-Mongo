const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  movieId: {
    type: String,
    required: [true, 'Favorite has to be linked to a movie'],
  },
});

const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;
