const Movie = require('../models/Movie');
const ErrorResponse = require('../utils/errorResponse');

exports.getAllMovies = (req, res, next) => {
  Movie.find()
    .then((movies) =>
      res.status(200).json({
        success: true,
        movies: movies,
      })
    )
    .catch((error) => next(error));
};

exports.getByCategory = (req, res, next) => {
  Movie.find({ categories: { $regex: req.params.category, $options: 'i' } })
    .then((movies) =>
      res.status(200).json({
        success: true,
        movies: movies,
      })
    )
    .catch((error) => next(error));
};

exports.getAllCategories = (req, res, next) => {
  Movie.distinct("categories")
    .then((categories) =>
      res.status(200).json({
        success: true,
        categories,
      })
    )
    .catch((error) => next(error));
};

exports.searchByTitle = (req, res, next) => {
  const titleDecode = decodeURIComponent(req.query.title)
  console.log(titleDecode)
  Movie.find({ title: titleDecode })
  .then((movie) =>
    res.status(200).json({
      success: true,
      movie: movie,
    })
  )
  .catch((error) => {
    console.log(error)
    next(error)
  });
}

exports.getMovieById = (req, res, next) => {
  Movie.findById(req.params.id)
    .then((movie) =>
      res.status(200).json({
        success: true,
        movie: movie,
      })
    )
  .catch((error) => next(error));
}

