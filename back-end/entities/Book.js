const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
    title: String,
    author: String,
});

module.exports = mongoose.model("Book", bookSchema);