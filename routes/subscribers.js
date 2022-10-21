const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscriber')

// Getting all
router.get('/', async (request, response) => {
    try {
        const subscribers = await Subscriber.find()
        response.json(subscribers)
    } catch (err) {
        response.status(500).json({ message: err.message })
    }
})
// Getting one
router.get('/:id', (request, response) => {
    response.send(request.params.id)
})
// Creating one
router.post('/', async (request, response) => {
    const subscriber = new Subscriber({
        name: request.body.name,
        subscribedToChannel: request.body.subscribedToChannel
    })
    try {
        const newSubscriber = await subscriber.save()
        response.status(201).json(newSubscriber)
    } catch (err) {
        response.status(400).json({ message: err.message })
    }
})
// Updating one
router.patch('/:id', (request, response) => {
    
})
// Deleting one
router.delete('/:id', (request, response) => {
    
})
module.exports = router