const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, 'A comment can not be blank'],
  },
  authorName: {
    type: String,
  },
  movieId: {
    type: String,
    required: [true, 'Comment has to be linked to a movie'],
  },
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
