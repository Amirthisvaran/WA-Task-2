const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

require('./db/connection')
const Feedbacks = require('./Models/Feedback')

app.post('/', async(req,res) => {
    let feedback = new Feedbacks(req.body)
    let result = await feedback.save()
    res.send(result)
})

app.get('/feedback', async (req, res) => {
    try {
        let filter = {};

        if (req.query.location) {
            filter.location = { $regex: req.query.location, $options: "C"};
        }

        const feedbacks = await Feedbacks.find(filter);
        res.json(feedbacks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.get('/feedback', (req,res) => {
    Feedbacks.find()
    .then(feedback => res.json(feedback))
    .catch(err => res.json(err))
})

app.listen(4000)