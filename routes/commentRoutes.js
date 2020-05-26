const express = require('express');
const commentController = require('./../controllers/commentController');

const router = express.Router();

router.route('/').get(commentController.getAllComments);

router
  .route('/:id')
  .post(commentController.createComment)
  .get(commentController.getComment)
  .patch(commentController.updateComment)
  .delete(commentController.deleteComment);

module.exports = router;
