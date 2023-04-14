const router = require('express').Router();
const authController = require('../controllers/authController');
const reviewController = require('../controllers/reviewController');

router
  .route('/')
  .get(authController.protect, reviewController.getAllReviews)
  .post(
    authController.protect,
    authController.restrictTo('user'),
    reviewController.createReview
  ); 

router.route('/:id').get(authController.protect, reviewController.getReview);

module.exports = router;
