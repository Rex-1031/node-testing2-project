const express = require('express')
const router = express.Router()

const Resource = require('./resource-model')

router.delete('/:id',(req, res)=>{
    const id = req.params.id
    const removeResource = Resource.remove(id)
    res.status(200).json(removeResource)

})

module.exports = router