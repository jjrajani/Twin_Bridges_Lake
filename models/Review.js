const mongoose = require('mongoose');
const { Schema } = mongoose;

const reviewSchema = new Schema({
  review: String,
  rating: Number,
  user: String,
  createdAt: Date
});

mongoose.model('reviews', reviewSchema);
