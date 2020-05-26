const Comment = require('./../models/commentModel');
const catchAsync = require('./../utils/catchAsync');

exports.getAllComments = catchAsync(async (req, res, next) => {
  const comments = await Comment.find();

  // SEND RESPONSE
  res.status(200).json({
    status: 'success',
    results: comments.length,
    data: {
      comments,
    },
  });
});

exports.getComment = catchAsync(async (req, res, next) => {
  const comment = await Comment.findById(req.params.id);

  if (!comment) {
    return next(new AppError('No comment found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      comment,
    },
  });
});

exports.createComment = catchAsync(async (req, res, next) => {
  const newComment = await Comment.create({
    text: req.body.text,
    authorName: req.body.authorName,
    movieId: req.params.id,
  });

  res.status(201).json({
    status: 'success',
    data: {
      comment: newComment,
    },
  });
});

exports.updateComment = catchAsync(async (req, res, next) => {
  const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!comment) {
    return next(new AppError('No comment found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      comment,
    },
  });
});

exports.deleteComment = catchAsync(async (req, res, next) => {
  const comment = await Comment.findByIdAndDelete(req.params.id);

  if (!comment) {
    return next(new AppError('No comment found with that ID', 404));
  }

  res
    .status(204)
    .json({
      status: 'success',
      data: null,
    })
    .render('home');
});
