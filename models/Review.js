const mongoose = require('mongoose');
const { Schema } = mongoose;

const reviewSchema = new Schema({
  review: String,
  rating: Number,
  user: String
});

mongoose.model('reviews', reviewSchema);
