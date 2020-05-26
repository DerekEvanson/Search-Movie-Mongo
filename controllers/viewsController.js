const catchAsync = require('../utils/catchAsync');
const axios = require('axios');

exports.getHome = catchAsync(async (req, res, next) => {
  res.status(200).render('home', {});
});

exports.getFavorites = catchAsync(async (req, res, next) => {
  res.status(200).render('favorites', {});
});

exports.getResults = catchAsync(async (req, res, next) => {
  console.log('search movies');
  let qs = {
    params: {
      s: req.body.searchWords,
      apikey: '640cf55b',
    },
  };

  axios.get('http://www.omdbapi.com', qs).then(function (response) {
    let dataObj = response.data.Search;
    res.status(200).render('results', {
      results: dataObj,
    });
  });
});

exports.getMovie = catchAsync(async (req, res, next) => {
  console.log('get movie');
  let qs = {
    params: {
      i: req.params.movieID,
      apikey: '640cf55b',
    },
  };

  axios.get('http://www.omdbapi.com', qs).then(function (response) {
    let dataObj = response.data;
    res.status(200).render('movie', {
      movie: dataObj,
    });
  });
});
