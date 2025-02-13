const mongoose = require('mongoose')

const feedbacksSchema = new mongoose.Schema({
    name: String,
    location: String,
    question: String
})

module.exports = mongoose.model("feedbacks", feedbacksSchema)