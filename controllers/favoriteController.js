const Favorite = require('./../models/FavoriteModel');
const catchAsync = require('./../utils/catchAsync');

exports.getAllFavorites = catchAsync(async (req, res, next) => {
  const favorites = await Favorite.find();

  // SEND RESPONSE
  res.status(200).json({
    status: 'success',
    results: favorites.length,
    data: {
      favorites,
    },
  });
});

exports.createFavorite = catchAsync(async (req, res, next) => {
  const newFavorite = await Favorite.create({
    movieId: req.params.id,
  });

  res.status(201).json({
    status: 'success',
    data: {
      favorite: newFavorite,
    },
  });
});

exports.deleteFavorite = catchAsync(async (req, res, next) => {
  const favorite = await Favorite.findByIdAndDelete(req.params.id);

  if (!favorite) {
    return next(new AppError('No favorite found with that ID', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
});
