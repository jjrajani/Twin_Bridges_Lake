const mongoose = require('mongoose');
const Review = mongoose.model('reviews');

module.exports = app => {
  app.get('/api/reviews', (req, res) => {
    Review.find({}, (err, reviews) => {
      res.send({ reviews: reviews });
    });
  });

  app.post('/api/reviews/new', async (req, res) => {
    const review = await new Review({
      review: req.review,
      rating: req.rating,
      user: req.user || 'guest'
    }).save();
    res.send({ review });
  });

  app.delete('/api/reviews/:id', (req, res) => {
    Review.findByIdAndRemove(req.params.id, {}, () => {
      res.send({ deleted: req.params.id });
    });
  });

  app.get('/api/reviews/:id', (req, res) => {
    Review.findById(req.params.id, (err, review) => {
      res.send(review);
    });
  });
};
