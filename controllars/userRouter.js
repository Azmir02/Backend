const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json([
        {
            name: 'Azmir',
        },
        {
            name: 'siam',
        },
        {
            name: 'sakib',
        },
        {
            name: "sohel"
        },
        {
            name: "sajib"
        },
        {
            name: "akram"
        }
    ])
})


module.exports = router