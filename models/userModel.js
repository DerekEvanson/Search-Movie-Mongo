const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'A user must have a email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Need a valid email'],
  },
  password: {
    type: String,
    required: [true, 'A user must have a password'],
    maxlength: [60, 'A name must have less or equal then 10 characters'],
    minlength: [2, 'A name must have more or equal then 2 characters'],
    select: false,
  },
  favoriteMovies: {
    type: Array,
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
