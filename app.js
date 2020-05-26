const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const viewRouter = require('./routes/viewRoutes');
const commentRouter = require('./routes/commentRoutes');
//const userRouter = require('./routes/userRoutes');
const favoriteRouter = require('./routes/favoriteRoutes');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Serving static files
app.use(express.static(path.join(__dirname, 'public')));

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(bodyParser.urlencoded({ extended: false }));

// 3) ROUTES
app.use('/', viewRouter);
app.use('/api/v1/comments', commentRouter);
//app.use('/api/v1/users', userRouter);
app.use('/api/v1/favorites', favoriteRouter);

module.exports = app;
