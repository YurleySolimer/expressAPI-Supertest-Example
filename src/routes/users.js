const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
    return res.json('All users sent')
})

router.get('/:id', (req, res) => {
    if (req.param.id === "00001") {
        return res.json('User found')
    }
    return res.status(404).json("User not found")
})

router.post('/', (req, res) => {
    const { username, password } = req.body
    if (username && password) {
        return res.status(201).json('User saved')
    }
    res.status(400).json('User not found')
})

module.exports = router