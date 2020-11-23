const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchame = new Schema({
    body: String,
    rating: Number
});

const Review = mongoose.model('Review', reviewSchame);
module.exports = Review;