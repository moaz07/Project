const mongoose = require('mongoose');
const { Schema } = mongoose;

const reviewSchema = new Schema({
    content: String,
    bookId: mongoose.ObjectId,
    userId: mongoose.ObjectId
});

module.exports = mongoose.model("Review", reviewSchema);