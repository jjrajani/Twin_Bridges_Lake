const mongoose = require('mongoose');
const Review = mongoose.model('reviews');
const User = mongoose.model('users');

module.exports = app => {
  app.get('/api/reviews', (req, res) => {
    // Review.find({}, (err, reviews) => {
    //   res.send(reviews);
    // });

    Review.find({}).sort({ createdAt: 'desc' }).exec(function(err, reviews) {
      //do stuff with images
      res.send(reviews);
    });
  });

  app.post('/api/reviews/new', async (req, res) => {
    let user;
    console.log('req.body', req.body);
    if (req.body.user !== 'guest') {
      user = await User.find({ facebookId: req.body.user }, (err, user) => {
        return user;
      });
    }
    console.log('USER', user);
    user = user ? user[0].username : 'guest';
    const review = await new Review({
      review: req.body.review,
      rating: req.body.rating,
      user: user,
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
