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

app.get('/feedback', (req,res) => {
    Feedbacks.find()
    .then(feedback => res.json(feedback))
    .catch(err => res.json(err))
})

app.listen(4000)