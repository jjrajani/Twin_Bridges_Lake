const mongoose = require('mongoose');
const Review = mongoose.model('reviews');
const User = mongoose.model('users');

module.exports = app => {
  app.get('/api/reviews', (req, res) => {
    Review.find({}).sort({ createdAt: 'desc' }).exec(function(err, reviews) {
      res.send(reviews);
    });
  });

  app.post('/api/reviews/new', async (req, res) => {
    const review = await new Review({
      review: req.body.text,
      rating: req.body.rating,
      user: req.body.username,
      createdAt: new Date()
    }).save();
    res.send(review);
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
